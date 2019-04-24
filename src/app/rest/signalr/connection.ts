import { Hub } from "./hub";
import { Observable } from "rxjs";

declare var jQuery: any;
export class Connection {
    private proxies = {};
    private connection: any;
    constructor(host: string, hubs: [Hub]) {
        const signalR = jQuery.signalR;
        this.connection = jQuery.connection;

        function makeProxyCallback(hub, callback) {
            return function() {
                callback.apply(hub, jQuery.makeArray(arguments));
            };
        }
        function registerHubProxies(instance, shouldSubscribe) {
            let key, hub, memberKey, memberValue, subscriptionMethod;
            for (key in instance) {
                if (instance.hasOwnProperty(key)) {

                    hub = instance[key];
                    if (!(hub.hubName)) {
                        // Not a client hub
                        continue;
                    }
                    if (shouldSubscribe) {
                        // We want to subscribe to the hub events
                        subscriptionMethod = hub.on;
                    } else {
                        // We want to unsubscribe from the hub events
                        subscriptionMethod = hub.off;
                    }
                    // Loop through all members on the hub and find client hub functions to subscribe/unsubscribe
                    for (memberKey in hub.client) {
                        if (hub.client.hasOwnProperty(memberKey)) {
                            memberValue = hub.client[memberKey];
                            if (!jQuery.isFunction(memberValue)) {
                                // Not a client hub function
                                continue;
                            }

                            subscriptionMethod.call(hub, memberKey, makeProxyCallback(hub, memberValue));
                        }
                    }
                }
            }
        }
        jQuery.hubConnection.prototype.createHubProxies = function() {

            this.starting(() => {
                // Register the hub proxies as subscribed
                // (instance, shouldSubscribe)

                registerHubProxies(this.proxies, true);
                this._registerSubscribedHubs();
            }).disconnected(() => {
                // Unsubscribe all hub proxies when we "disconnect".  This is to ensure that we do not re-add functional call backs.
                // (instance, shouldSubscribe)

                registerHubProxies(this.proxies, false);
            });

            jQuery.hubConnection.createHubProxy = this.createHubProxy;
            for (const hub of hubs) {
                jQuery.extend(this.proxies, hub.bind(this));
            }

            return this.proxies;
        };

        signalR.hub = jQuery.hubConnection("/api/signalr", { useDefaultPath: false });
        const hubproxises = signalR.hub.createHubProxies();
        jQuery.extend(signalR, hubproxises);
        this.connection.hub.url = host + "/api/signalr";
        for (const item of hubs) {
            this[item.meta.name] = item;
        }
        this.hubStart();
    }
    hubStart(): void {
        this.connection.hub.start()
            .done(() => {
                console.log("Connected!");
            })
            .fail(() => {

                setTimeout(() =>
                    this.hubStart(), 5000); // Restart connection after 5 seconds.
                console.log("Could not Connect!");
            });
    }

}

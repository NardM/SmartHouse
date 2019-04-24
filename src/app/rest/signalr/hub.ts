import { Observable } from "rxjs";
import { Tuple } from "../tuple";

declare var jQuery: any;
export class Hub {
    meta: any;
    client: any;
    server: any;

    bind(value: any) {
        const proxy = this.connect(value, this.meta);
        this.client = proxy.tsclient;
        this.server = proxy.tsserver;
        const proxies = {};
        if (this.meta != null && this.meta.client != null) {
            for (const clientMethod of this.meta.client) {
                proxy.client[clientMethod] = () => {
                    console.log("method: " + clientMethod + " called;");
                };
            }
        }

        proxies[this.meta.name] = proxy;

        return proxies;
    }

    private connect(value, proxyItem): any {
        const proxy = value.createHubProxy(proxyItem.name);
        proxy.client = {};
        proxy.tsclient = {};
        proxy.server = {};

        if (proxyItem.server != null) {
            for (const serverMethod of proxyItem.server) {
                proxy.server[serverMethod] = function() {

                    return proxy.invoke.apply(proxy, jQuery.merge([serverMethod], jQuery.makeArray(Tuple.create(arguments))));
                };
                proxy.tsserver[serverMethod] = Observable.create((observer) => {
                    proxy.server[serverMethod]().done((a) => observer.next(a)).fail(function(e) {
                        observer.error(e);
                        /*
                        if (e.source === 'HubException') {
                            console.error("Error message: ", e.message);
                            console.error("Error status: ", e.data.status);
                        }
                        */
                    });
                });
            }
        }
        for (const clientMethod of proxyItem.client) {
            proxy.tsclient[clientMethod] = Observable.create((observer) => {
                proxy.client[clientMethod] = (a) => {
                    observer.next(a);
                };
            });
        }

        return proxy;
    }

}

import { EventEmitter, Injectable } from "@angular/core";
import * as connectivityModule from "tns-core-modules/connectivity";

@Injectable({
    providedIn: 'root',
})
export class ConnectivityStatusService {
  /*  statusChangeEvent: EventEmitter<boolean> = new EventEmitter();

    private currentStatus: boolean;
    private backendStatusEvent: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.currentStatus = connectivityModule.getConnectionType() !== connectivityModule.connectionType.none;
        console.log("initial connectivity:" + this.currentStatus);
        this.startTrackingDeviceConnectivity();
        this.startTrackingBackendConnectivity();
    }

    getCurrentStatus() {
        return this.currentStatus;
    }

    reportConnectivity(status: boolean) {
        console.log("reported connectivity from Kinvey:" + status);
        this.backendStatusEvent.emit(status);
    }

    private startTrackingDeviceConnectivity() {
        connectivityModule.startMonitoring((newConnectionType) => {
            this.notifyStatusUpdated(newConnectionType !== connectivityModule.connectionType.none);

            if (newConnectionType !== connectivityModule.connectionType.none) {
                console.log("Found Network!!!");
            } else {
                console.log("No Network!!!");
            }
        });
    }

    private startTrackingBackendConnectivity() {
        this.backendStatusEvent.subscribe((backendStatus) => {
            this.notifyStatusUpdated(backendStatus);
        });
    }

    private notifyStatusUpdated(status) {
        if (this.currentStatus !== status) {
            console.log("Notify Network is UP: " + status);

            this.currentStatus = status;
            this.statusChangeEvent.emit(status);
        }
    }*/
}

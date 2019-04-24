import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { share } from "rxjs/operators";
import * as appSettings from "tns-core-modules/application-settings";

@Injectable()
export class StorageService implements OnDestroy {
    private onSubject = new Subject<{ key: string, value: any }>();

    private changes = this.onSubject.asObservable().pipe(share());

    constructor() {
        this.start();
    }

    ngOnDestroy() {
        this.stop();
    }

    removeItem(key: string) {
        appSettings.remove(key);
    }

    getStorage() {

    }

    getItem(key: string) {
        const item = appSettings.getString(key);
        if (item === "null" || item === undefined) {
            return null;
        }

        return item;
    }

    store(key: string, data: any): void {
        appSettings.setString(key, data);
        this.onSubject.next({key, value: data});
    }

    setItem(key: string, data: any): void {
        appSettings.setString(key, data);
        this.onSubject.next({key, value: data});
    }

    clear(key) {
        appSettings.remove(key);
        this.onSubject.next({key, value: null});
    }

    private start(): void {
      //  window.addEventListener("storage", this.storageEventListener.bind(this));
    }

    private storageEventListener(event: StorageEvent) {
        if (event.storageArea === localStorage) {
            let v;
            try {
                v = JSON.parse(event.newValue);
            } catch (e) {
                v = event.newValue;
            }
            this.onSubject.next({key: event.key, value: v});
        }
    }

    private stop(): void {
        // window.removeEventListener("storage", this.storageEventListener.bind(this));
        this.onSubject.complete();
    }
}

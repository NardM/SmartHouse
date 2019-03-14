import { Injectable } from '@angular/core';
import { ServiceType } from "~/app/theme/home/service/service.component";

@Injectable()
export class ServiceService {

    currentService: CurrentService;

    constructor() {
    }

    setCurrentService(currentService: CurrentService): void {
        this.currentService = currentService;
    }

    getCurrentService(): CurrentService {
        return this.currentService;
    }

}

export class CurrentService {
    title: string;
    id: number;
    submit: string;
    type: ServiceType;
}

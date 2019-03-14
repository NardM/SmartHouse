import { Injectable } from '@angular/core';
import { CurrentService, ServiceModel } from "~/app/theme/home/service/shared/service.model";

@Injectable()
export class ServiceService {

    private _currentService: CurrentService;

    constructor() {
    }

    setCurrentService(currentService: CurrentService): void {
        this._currentService = currentService;
    }

    getCurrentService(): CurrentService {
        return this._currentService;
    }

    builder(): ServiceModel {
        return new ServiceModel(this._currentService.type);
    }
}


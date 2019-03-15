import { Injectable } from "@angular/core";
import { ServiceModel } from "~/app/theme/home/service/shared/service.model";
import { CurrentService } from "~/app/theme/home/service/shared/currentService";

@Injectable()
export class ServiceService {

    private _currentService: CurrentService;

    constructor() {}

    setCurrentService(currentService: CurrentService): void {
        this._currentService = currentService;
    }

    getCurrentService(): CurrentService {
        return this._currentService;
    }

    getServiceModel(): ServiceModel {
        return new ServiceModel(this._currentService.type);
    }
}

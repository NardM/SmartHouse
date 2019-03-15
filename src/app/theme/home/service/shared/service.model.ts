import { MessageStore, ServiceStore } from "~/app/theme/home/service/shared/serviceStore";

export interface IPropertyAnnotation {
    name: string;
    displayName: string;
    index: number;
    editor: string;
}

export interface IService {
    isReadOnly: boolean;
    commitMode: string;
    validationMode: string;
    propertyAnnotations: Array<IPropertyAnnotation>;
}
export class ServiceModel implements IService {
    commitMode: string;
    isReadOnly: boolean;
    propertyAnnotations: Array<IPropertyAnnotation>;
    validationMode: string;
    multilineTextService: IPropertyAnnotation = {
        name: "text",
        displayName: "Укажите причину",
        index: 1,
        editor: "MultilineText"
    };

    multilineTextMessage: IPropertyAnnotation = {
        name: "text",
        displayName: "Введите текст",
        index: 1,
        editor: "MultilineText"
    };

    date: IPropertyAnnotation = {
        name: "date",
        displayName: "Желаемое дата прибытие специалиста",
        index: 2,
        editor: "DatePicker"
    };

    store: ServiceStore | MessageStore;

    constructor(serviceTypeEnum: ServiceType) {
        this.default();
        switch (serviceTypeEnum) {
            case ServiceType.service:
                this.propertyAnnotations = [this.multilineTextService, this.date];
                this.store = new ServiceStore("", new Date().getTime());
                break;
            case ServiceType.message:
                this.propertyAnnotations = [this.multilineTextMessage];
                this.store = new MessageStore("");
                break;
        }
    }

    default() {
        this.commitMode = "immediate";
        this.isReadOnly = false;
        this.validationMode = "immediate";
    }

}

export enum ServiceType {
    service,
    message
}

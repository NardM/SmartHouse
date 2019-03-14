
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
export class CurrentService {
    title: string;
    id: number;
    submit: string;
    type: ServiceType;
}
export class AddStore {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}
export class ServiceModel implements IService {
    commitMode: string;
    isReadOnly: boolean;
    propertyAnnotations: Array<IPropertyAnnotation>;
    validationMode: string;
    multilineText: IPropertyAnnotation = {
        name: "text",
        displayName: "Укажите причину",
        index: 1,
        editor: "MultilineText"
    };

    date: IPropertyAnnotation = {
        name: "description",
        displayName: "Желаемое дата прибытие специалиста",
        index: 2,
        editor: "Date"
    };

    constructor(serviceTypeEnum: ServiceType) {
        this.default();
        switch (serviceTypeEnum) {
            case ServiceType.service:
                this.propertyAnnotations = [this.multilineText, this.date];
                break;
            case ServiceType.message:
                this.propertyAnnotations = [this.multilineText];
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

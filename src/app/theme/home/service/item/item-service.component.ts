import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular";
import * as imagepicker from "nativescript-imagepicker";
import { MessageStore, ServiceStore } from "../shared/serviceStore";
import { ServiceService } from "../shared/service.service";
import { CurrentService } from "../shared/currentService";
import { ServiceModel, ServiceType } from "~/app/theme/home/service/shared/service.model";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "hs-item-service",
    moduleId: module.id,
    templateUrl: "./item-service.component.html",
    styleUrls: ["./item-service.component.scss"]
})
export class ItemServiceComponent implements OnInit {

    currentItem: CurrentService = null;
    store: ServiceStore | MessageStore;
    metadata: ServiceModel;
    imageAssets = [];
    imageSrc: any;
    isSingleMode: boolean = true;
    thumbSize: number = 80;
    previewSize: number = 300;
    imageUpload: boolean = false;

    constructor(private activateRoute: ActivatedRoute,
                private serviceService: ServiceService,
                private routerExtensions: RouterExtensions) {
        this.currentItem = serviceService.getCurrentService();
    }

    ngOnInit(): void {
        const data: ServiceModel = this.serviceService.getServiceModel();
        this.store = data.store;
        this.metadata = data;
    }

    onSubmit() {
        if (this.currentItem.type === ServiceType.service) {
            dialogs.alert({
                title: "Вызов специалиста",
                message: "Заявка успешно отправлена",
                okButtonText: "Закрыть"
            }).then(() => {
                this.routerExtensions.navigate(["home"]);
            });
        } else {
            dialogs.alert({
                title: "Предложить запись",
                message: "Успешно отправлено",
                okButtonText: "Закрыть"
            }).then(() => {
                this.routerExtensions.navigate(["home"]);
            });
        }
    }

    goBack(): void {
        this.routerExtensions.back();
    }
    onSelectMultipleTap() {
        this.isSingleMode = false;

        const context = imagepicker.create({
            mode: "multiple"
        });
        this.startSelection(context);
    }

    onSelectSingleTap() {
        this.isSingleMode = true;

        const context = imagepicker.create({
            mode: "single"
        });
        this.startSelection(context);
    }

    private startSelection(context) {
        const that = this;

        context
            .authorize()
            .then(() => {
                that.imageAssets = [];
                that.imageSrc = null;
                return context.present();
            })
            .then((selection) => {
                console.log("Selection done: " + JSON.stringify(selection));
                that.imageSrc = that.isSingleMode && selection.length > 0 ? selection[0] : null;

                // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
                selection.forEach(function(element) {
                    element.options.width = that.isSingleMode ? that.previewSize : that.thumbSize;
                    element.options.height = that.isSingleMode ? that.previewSize : that.thumbSize;
                });

                that.imageAssets = selection;
                that.imageUpload = true;
            }).catch(function(e) {
            console.log(e);
        });
    }
}

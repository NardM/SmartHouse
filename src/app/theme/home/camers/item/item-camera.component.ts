import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from "tns-core-modules/ui/page";
import { Video } from "nativescript-videoplayer";
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "hs-item-camera",
    moduleId: module.id,
    templateUrl: "./item-camera.component.html"
})
export class ItemCameraComponent implements OnInit, AfterViewInit {

    videoPlayer: any;

    constructor(private page: Page) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.videoPlayer = this.page.getViewById("nativeVideoPlayer");
    }

    play() {
        this.videoPlayer.play();
    }

    pause() {
        this.videoPlayer.pause();
    }

    seekToTime() {
        this.videoPlayer.seekToTime(30);
    }

}

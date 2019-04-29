import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from "tns-core-modules/ui/page";
import { Video } from "nativescript-videoplayer";
import { RouterExtensions } from "nativescript-angular";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
registerElement("VideoPlayer", () => Video);

@Component({
    selector: "hs-item-camera",
    moduleId: module.id,
    templateUrl: "./item-camera.component.html"
})
export class ItemCameraComponent implements OnInit, AfterViewInit {

    videoPlayer: any;
    private subscription: Subscription;
    private id: number;
    src: string = null;
    showLoader: boolean = true;


    constructor(private page: Page,
                private routerExtensions: RouterExtensions,
                private activateRoute: ActivatedRoute) {
        this.subscription = activateRoute.params.subscribe((params: any) => this.id = params.id);
        switch (Number(this.id)) {
            case 2:
                this.src = 'https://r2---sn-4g5e6nze.googlevideo.com/videoplayback?id=o-APBF_6GNyz9sidgy-2r5CdVIJIEU24CKfgwMxKHZmQlo&itag=43&source=youtube&requiressl=yes&pl=24&ei=sTbHXKX5OY-t7QSdsKGQCw&mime=video%2Fwebm&gir=yes&clen=8325076&ratebypass=yes&dur=0.000&lmt=1498711497167755&fvip=2&beids=9466586&c=WEB&ip=31.214.138.207&ipbits=0&expire=1556581138&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&signature=240411BD897FF9213185E27B77CB54268E8A164D.2B207530930BB9E422D9BEBD96B8909345DC5053&key=cms1&video_id=c1avZOJMzZQ&title=IP+1mpx+VDO-IBH4E305A+%D0%A3%D0%BB%D0%B8%D1%87%D0%BD%D0%B0%D1%8F+%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F&rm=sn-5uh5o-f5fs7l&fexp=9466586&req_id=1bc4c849317236e2&redirect_counter=2&cm2rm=sn-f5f67l&cms_redirect=yes&mip=91.225.79.30&mm=34&mn=sn-4g5e6nze&ms=ltu&mt=1556559227&mv=u';
                break;
            case 3:
                this.src = 'https://r4---sn-o097znlr.googlevideo.com/videoplayback?id=o-AAfKUsNGGrIcn-mzukFAYJu2X-aRCB9q1rD1hu_unNqR&itag=43&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-o097znlr%2Csn-n4v7snee&ms=au%2Crdu&mv=u&pl=20&ei=Ri_HXKmGBJrMkga6xrDwDA&mime=video%2Fwebm&gir=yes&clen=2296044&ratebypass=yes&dur=0.000&lmt=1457980177015704&mt=1556557426&fvip=3&c=WEB&ip=23.80.157.92&ipbits=0&expire=1556579238&sparams=ip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cei%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&signature=3FF42B5B302DAF824CE305FB616CC77FB368A318.DA70397543CBE8E0E4F15C1B8E28E86BD1722ED2&key=yt8&video_id=jJ-ULXPrIA0&title=%D0%92%D0%B8%D0%B4%D0%B5%D0%BE+%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D1%80+%D1%81+%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D1%8B+%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BD%D0%B0%D0%B1%D0%BB%D1%8E%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F+%D0%B2+%D0%BF%D0%BE%D0%B4%D1%8A%D0%B5%D0%B7%D0%B4%D0%B5+AHD+1%2C3+Mp.';
                break;
        }
    }

    ngOnInit(): void {
    }
    goBack(): void {
        this.routerExtensions.back();
    }
    ngAfterViewInit() {
        this.videoPlayer = this.page.getViewById("nativeVideoPlayer");
        setInterval(() => {
            if (this.videoPlayer.getDuration() > 0) {
                this.showLoader = false;
            }
        });
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

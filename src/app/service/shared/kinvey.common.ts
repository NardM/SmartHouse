import { Kinvey } from "kinvey-nativescript-sdk";
import { Config } from "./config";

/* ***********************************************************
* The {N} Kinvey plugin initialization is explained in the plugin readme here:
* http://devcenter.kinvey.com/nativescript/guides/getting-started#ConfigureYourApp
* To run this project, you need:
* - a Kinvey app created and hooked in ~/shared/config.ts
* - a Kinvey User in the created app, with hooked user and pass in ~/shared/config.ts
*************************************************************/
try {
    Kinvey.init({
        appKey: Config.kinveyAppKey,
        appSecret: Config.kinveyAppSecret,
        defaultTimeout: 10000
    });
} catch (err) {
    console.log("Kinvey err:" + err);
}

console.log("Kinvey.init called");

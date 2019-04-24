import { AppType } from "src/app/genmodel/app_type.enum";
import { DeviceType } from "src/app/genmodel/device_type.enum";
export interface ApplicationVersionBaseModel {
	app_version: string;
	app_type: AppType;
	device_type: DeviceType;
	app_build: number;
}

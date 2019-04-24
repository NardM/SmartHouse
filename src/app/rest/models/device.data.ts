import { DeviceBase } from "./device.base";

// export class DeviceDataModel extends DeviceBase {
export class DeviceDataModel {
    device_id: string;
    os_version: string;
    app_version: string;
    app_type: number;
    device_type: number;
    app_build: number;
}

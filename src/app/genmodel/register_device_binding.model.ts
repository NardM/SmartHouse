import { ApplicationVersionBaseModel } from 'src/app/genmodel/application_version_base.model';
export interface RegisterDeviceBindingModel extends ApplicationVersionBaseModel{
	device_id: string;
	os_version: string;
}

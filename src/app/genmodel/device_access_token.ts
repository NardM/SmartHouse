export class DeviceAccessToken {
	access_token: string;
	access_token_hash: string;
	token_type: string;
	expires_in: number;
	api_host: string;
	date: Date;
	need_sync: boolean;
}

import { ProfileSettingModel } from 'src/app/genmodel/profile_setting.model';
export class LoginAccessToken {
	access_token: string;
	token_type: string;
	expires_in: number;
	settings: ProfileSettingModel;
	user_id: number;
	token_hash: string;
}

import { Observable } from "rxjs";
import { Injectable, Injector } from "@angular/core";
import { BaseService } from "~/app/rest/rest.service";
import { ImageBitmapModel } from "~/app/genmodel/image_bitmap.model";

@Injectable()
export class ResidentAvatarService extends BaseService {
    constructor(inject: Injector) {
        super(inject);
    }

    read(residentId: number, id: number): Observable<ImageBitmapModel> {
        const url = `${this.host_url}/Resident/${residentId}/Avatar?id=${id}`;

        return this.get<ImageBitmapModel>(url);
    }
}

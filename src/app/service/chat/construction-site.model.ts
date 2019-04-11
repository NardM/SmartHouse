export class ImageFile {
    imageUrl: string;
    fileId: string;

    constructor(imageUrl: string, fileId: string) {
        this.imageUrl = imageUrl;
        this.fileId = fileId;
    }
}

export class ConstructionSite {
    id: string;
    name: string;
    address: string;
    hasBoots: boolean;
    hasEyeProtection: boolean;
    hasHardHats: boolean;
    hasHearingProtection: boolean;
    hasRespiratoryProtection: boolean;
    notes: string;
    imageIds: Array<ImageFile>;

    constructor(options?: any) {
        this.id = options ? options._id : this.id;
        this.name = options ? options.name : "";
        this.hasBoots = options ? options.hasBoots : false;
        this.hasEyeProtection = options ? options.hasEyeProtection : false;
        this.hasHardHats = options ? options.hasHardHats : false;
        this.hasHearingProtection = options ? options.hasHearingProtection : false;
        this.hasRespiratoryProtection = options ? options.hasRespiratoryProtection : false;
        this.notes = options ? options.notes : "";
        this.address = options ? options.address : "";
        this.imageIds = options ? options.imageIds && (typeof options.imageIds) === "string" ? JSON.parse(options.imageIds) : this.imageIds : this.imageIds;
    }

    getThumbnailUrl() {
        // [optional] Resize image service implementation
        // return this.getResizedImageUrl(180, 180, true);
        return this.getOriginalImageUrl();
    }

    getImageUrl() {
        // [optional] Resize image service implementation
        // return this.getResizedImageUrl(1000);
        return this.getOriginalImageUrl();
    }

    getImageFileId() {
        return this.hasValidImage() ? this.imageIds[0].fileId : null;
    }

    private getOriginalImageUrl() {
        return this.hasValidImage() ? this.imageIds[0].imageUrl : null;
    }

    // [optional] Resize image service implementation
    // implement https://rsz.io/#examples responsive image service (speeds up images loading)
    private getResizedImageUrl(width: number, height: number = 0, crop: boolean = false) {
        let imageUrl = this.getOriginalImageUrl();
        return imageUrl ? `https://rsz.io/${imageUrl.replace("https://", "")}?w=${width}&h=${height}&mode=${crop ? "crop" : "pad"}` : null;
    }

    private hasValidImage() {
        return this.imageIds && this.imageIds.length > 0 && this.imageIds[0] && this.imageIds[0].imageUrl;
    }
}

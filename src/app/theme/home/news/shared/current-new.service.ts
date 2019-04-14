import { Injectable } from '@angular/core';
import { NewsItem } from "~/app/model/news.model";

@Injectable()
export class CurrentNewService {
    get currentItem(): NewsItem {
        return this._currentItem;
    }

    set currentItem(value: NewsItem) {
        this._currentItem = value;
    }

    private _currentItem: NewsItem;

    constructor() {
    }

    clear() {
        this.currentItem = null;
    }
}

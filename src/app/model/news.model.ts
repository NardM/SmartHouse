export interface INewsItem {
    id: number;
    title: string;
    text: string;
    url: string;
}

export class NewsItem implements INewsItem {
    id: number;
    text: string;
    title: string;
    url: string;

    constructor(data: INewsItem) {
        this.id = data.id;
        this.text = data.text;
        this.title = data.title;
        this.url = data.url;
    }
}

export interface INewsItem {
    id: number;
    title: string;
    text: string;
    url: string;
    date: string;
    author: string;
    seenCount: number;
}

export class NewsItem implements INewsItem {
    id: number;
    text: string;
    title: string;
    url: string;
    date: string;
    author: string;
    seenCount: number;

    constructor(data: INewsItem) {
        this.id = data.id;
        this.text = data.text;
        this.title = data.title;
        this.url = data.url;
        this.seenCount = data.seenCount;
        this.date = data.date;
        this.author = data.author;
    }
}

export class ServiceStore {
    text: string;
    date: number;

    constructor(text: string, date: number) {
        this.text = text;
        this.date = date;
    }
}
export class MessageStore {
    text: string;

    constructor(text: string) {
        this.text = text;
    }
}

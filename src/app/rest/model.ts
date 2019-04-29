export class RestList<T> {
    items: Array<T>;
    count: number;
    offset: number;
    total_count: number;

    constructor(a?: any, type?: { new(): T }) {
        if (a == null) {
            this.items = [];
        } else {
            if (type != null) {
                if (a.items != null) {
                    const array = a.items as Array<T>;
                    this.items = array.map((item) => this.copyTo(item, new type()));
                }

            } else {
                this.items = a.items.map((item) => this.copyTo(item, {} as T));
            }
            this.count = a.count;
            this.offset = a.offset;
        }
    }
    add(item: T) {
        this.items.push(item);
    }
    remove(item: T) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
    concat(item: RestList<T>) {
        this.items = this.items.concat(item.items);
        this.count = this.count + item.count;
    }
    private copyTo(inValue: any, item: T): T {
        // tslint:disable-next-line:forin
        for (const key in inValue) {
            const value = inValue[key];
            if (key.includes("_date") || key.includes("date_") || key === "date" || key.includes("last_modif")) {
                if (typeof value === "number") {
                    const newDateValue = value + (new Date().getTimezoneOffset() * 60 * 1000);
                    item[key] = new Date(newDateValue);
                } else {
                    item[key] = value;
                }
            } else {
                item[key] = value;
            }
        }

        return item;
    }

}

export class Answer<T> {
    success: boolean;
    data: T;
    message: ErrorDescription;
}

export class EmptyAnswer {
    success: boolean;
    message: ErrorDescription;
}

export enum ErrorCode {
    WrongInputData = 1,
    ServerError = 2,
    NotFound = 3,
    Exists = 4,
    LastModified = 5,
    NotValidPassword = 6,
    NotValidCode = 7,
    AccessError = 8,
    BannedRequest = 9,
    LimitError = 10,
    ObsoleteMethod = 11,
    Locked = 12
}
export class ErrorDescription {
    code: number;
    message: string;
}
interface QueryParam {
    query(): string;
}
export class EnumFilter<T> implements QueryParam {
    private code: number;
    private values: [T];
    constructor(params: [T]) {
        for (let index = 0; index < params.length; index++) {
            const enumCode = params[index];
            const o = enumCode;
        }
    }
    // для запроса - параметры переводит в сптроку для вставки в url
    query(): string {
        return this.code.toString();
    }

}
export class RestCollection<T> extends RestList<T> {

}
export class Pager implements QueryParam {
    offset: number;
    count: number;
    constructor(offset: number,
                count: number) {
        this.offset = offset;
        this.count = count;
    }
    query(): string {
        return `count=${this.count}&offset=${this.offset}`;
    }
}
export class IntRange {
    StartInt: number;
    EndInt: number;
    private StartOperation: string;
    private EndOperation: string;
    query(): string {
        if (this.EndOperation == null) {
            return `${this.StartOperation}_${this.StartInt}`;
        }
        return `${this.StartOperation}_${this.StartInt}_${this.EndOperation}_${this.EndInt}`;
    }
}
export enum DateRangeOperation {
    Eq,
    Gt,
    Lt,
    Ge,
    Le,
    Deq,
    Dgt,
    Dlt,
    Dge,
    Dle
}
export class DateRange {

    static from(date: Date): DateRange {
        return new DateRange("lg", date);
    }
    static eq(date: Date): DateRange {
        return new DateRange("eq", date);
    }
    static eqd(date: Date): DateRange {
        return new DateRange("eqd", date);
    }
    static before(date: Date): DateRange {
        return new DateRange("lg", date);
    }
    StartOperation: string;
    EndOperation: string;
    StartDate: Date;
    EndDate: Date;
    constructor(startOperation: string,
                startDate: Date,
                endOperation?: string,
                endDate?: Date) {
        this.StartOperation = startOperation;
        this.EndOperation = endOperation;
        this.StartDate = startDate;
        this.EndDate = endDate;
    }
    from(date: Date): DateRange {
        this.EndDate = date;
        this.EndOperation = "lg";
        return this;
    }
    before(date: Date): DateRange {
        this.EndDate = date;
        this.EndOperation = "lg";
        return this;
    }
    query(): string {
        if (this.EndOperation == null) {
            return `${this.StartOperation}_${this.StartDate.getTime()}`;
        }
        return `${this.StartOperation}_${this.StartDate.getTime()}_${this.EndOperation}_${this.EndDate.getTime()}`;
    }
    private gettext(operation: DateRangeOperation) {
        switch (operation) {
            case DateRangeOperation.Eq: return "eq";
            case DateRangeOperation.Gt: return "gt";
            case DateRangeOperation.Lt: return "lt";
            case DateRangeOperation.Ge: return "ge";
            case DateRangeOperation.Le: return "le";
            case DateRangeOperation.Deq: return "deq";
            case DateRangeOperation.Dgt: return "dgt";
            case DateRangeOperation.Dlt: return "dlt";
            case DateRangeOperation.Dge: return "dge";
            case DateRangeOperation.Dle: return "dle";
        }
    }
}

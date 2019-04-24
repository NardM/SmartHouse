export class Tuple {
    static create(args: IArguments) {
        if (args.length > 1) {
            const res = {};
            for (let i = 0; i < args.length; i++) {
                res["item" + i] = args[i];
            }
            return res;
        }
        return args[0];
    }
}
export interface Tuple2<T1, T2> {
    item1: T1;
    item2: T2;
}
export interface Tuple3<T1, T2, T3> {
    item1: T1;
    item2: T2;
    item3: T3;
}
export interface Tuple4<T1, T2, T3, T4> {
    item1: T1;
    item2: T2;
    item3: T3;
    item4: T4;
}

export interface Tuple5<T1, T2, T3, T4, T5> {
    item1: T1;
    item2: T2;
    item3: T3;
    item4: T4;
    item5: T5;
}

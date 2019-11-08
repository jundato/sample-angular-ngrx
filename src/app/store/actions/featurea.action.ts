import { Action } from "@ngrx/store";

export const CHANGE = '[featureA] change';
export class Change  implements Action {
    readonly type = CHANGE;
}

export const INCREASE = '[featureA] increase';
export class Increase  implements Action {
    readonly type = INCREASE;
}

export const DECREASE = '[featureA] decrease';
export class Decrease implements Action {
    readonly type = DECREASE;
}

export const RESET = '[featureA] reset';
export class Reset implements Action {
    readonly type = RESET;
}

export type Actions =
    | Change
    | Increase
    | Decrease
    | Reset
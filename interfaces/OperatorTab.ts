import {ReactChild, ReactNode} from "react";

export interface OperatorTab {
    id: number,
    title: string,
    value: TabOption,
    view: ReactNode,
    icon: ReactChild
}

export enum TabOption {
    SUM,
    SUB,
    MUL,
    DIV
}
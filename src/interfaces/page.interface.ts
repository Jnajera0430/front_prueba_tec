import { OrderEnum } from "../enum/OrderPage.enum"

export interface QueryFetch {
    url: string
    order: OrderEnum | string,
    page: number,
    take: number
}

export class MetaData {
    page: number;
    take: number;
    itemCount?: number;
    pageCount?: number;
    hasPreviousPage?: boolean;
    hasNextPage?: boolean;

    constructor(page: number, take: number) {
        this.page = page;
        this.take = take;
    }
}

export interface Page<T> {
    data: T[],
    meta: MetaData
}
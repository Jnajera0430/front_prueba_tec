import { OrderEnum } from "../enum/OrderPage.enum";
import { methodEnum } from "../enum/methodEnum"
import { DataFetch } from "../interfaces/dataFetch.interface"
import { QueryFetch } from "../interfaces/page.interface";

export const useFetch = async (url: string, method: methodEnum = methodEnum.GET, body?: any) => {
    const response = await fetch(`http://localhost:8000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const dataFetch: DataFetch<any> = await response.json();
    return dataFetch.data ? { data: dataFetch.data, status: response.status, meta: dataFetch.meta } :
        { data: dataFetch, status: response.status };
}

export const useFetchQuery = async (method: methodEnum = methodEnum.GET, query: QueryFetch = { url: '', take: 10, page: 1, order: OrderEnum.ASC }) => {
    const response = await fetch(`http://localhost:8000/${query.url}?take=${query.take}&page=${query.page}&order=${query.order}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const dataFetch: DataFetch<any> = await response.json();
    return dataFetch.data && dataFetch.meta ? { data: dataFetch.data, status: response.status, meta: dataFetch.meta } :
        { data: dataFetch, status: response.status };
}
import { methodEnum } from "../enum/methodEnum"
import { DataFetch } from "../interfaces/dataFetch.interface"

export const useFetch = async (url: string, method: methodEnum = methodEnum.GET, body?: any) => {
    const response = await fetch(`http://localhost:8000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const dataFetch: DataFetch<any> = await response.json();
    return dataFetch.data ? { data: dataFetch.data, status: response.status } : { data: dataFetch, status: response.status };
}
import { PropsWithChildren, createContext, useState } from "react";
import { IContext } from "../interfaces/context.interface";
import { Page, QueryFetch } from "../interfaces/page.interface";
import { Data, DataUser } from "../interfaces/dataFetch.interface";
import { useFetchQuery } from "../Fetch/fetch";
import { methodEnum } from "../enum/methodEnum";
import { Search } from "../interfaces/search.interface";

export const Context = createContext<IContext | null>({
    dataUser: {
        data: [],
        meta: {
            page: 1,
            take: 10,
            itemCount: 0,
            pageCount: 0,
            hasPreviousPage: false,
            hasNextPage: false
        }
    },
    onQuery: async (method: methodEnum = methodEnum.GET, query: QueryFetch) => { }
});

export const ContextProvider = (props: PropsWithChildren) => {
    const [dataUser, setDataUser] = useState<Page<Data<DataUser>>>({
        data: [],
        meta: {
            page: 1,
            take: 10,
            itemCount: 0,
            pageCount: 0,
            hasPreviousPage: false,
            hasNextPage: false
        }
    });

    const onQuery = async (method: methodEnum, query: QueryFetch, keyWords?:Search) => {
        const result = await useFetchQuery(method, query,keyWords);
        if(result.meta){     
            setDataUser({
                data: result.data,
                meta: result.meta
            })
        }
        
    }
    return <Context.Provider value={{ dataUser, onQuery }}>
        {props.children}
    </Context.Provider>
}
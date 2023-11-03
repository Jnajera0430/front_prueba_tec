import { methodEnum } from "../enum/methodEnum";
import { Data, DataUser } from "./dataFetch.interface";
import { Page, QueryFetch } from "./page.interface";

export interface IContext {
    dataUser: Page<Data<DataUser>>,
    onQuery: (method:methodEnum,query: QueryFetch)=>Promise<void>
}
export interface DataFetch<T> {
    status?: number;
    message?: string;
    data?: T
}

export interface OptionsData {
    isNewRecord: boolean,
    _schema: any,
    _schemaDelimiter: string,
    raw: boolean,
    attributes: string[]
}
export interface Data<T> {
    dataValues: T;
    _previousDataValues: T;
    uniqno: number;
    _changed: any;
    _options: OptionsData;
    isNewRecord: boolean;
}

export interface DataUser {
    id?: number,
    nombres: string,
    apellidos: string,
    edad: number,
    telefono: number,
    email: string,
    status: string,
    createdAt?: string,
    updatedAt?: string
}
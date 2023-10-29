export interface ContrainsInter {
    isNotEmpty: string,
    isInt: string,
    isEmail:string
}

export interface Detail{
    field:string,
    constrains:ContrainsInter
}

export interface ErrorValidate{
    error:string,
    details: Detail[]
}
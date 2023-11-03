import {useContext} from 'react'
import { IContext } from '../interfaces/context.interface';
import { Context } from './ContextProvider';

export const UseContext = () =>{
    const currentContext:IContext | null = useContext(Context);

    if(!currentContext){
        throw new Error("El contexto no ha sido creado");
    }

    return currentContext;
}

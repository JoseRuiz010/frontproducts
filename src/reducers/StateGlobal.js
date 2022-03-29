import { useReducer } from "react"
import { TypeReducer } from "../types/TypeReducer"
import { ContextGlobal } from "./ContextGlobal"
 
import { ReducerGlobalState } from "./ReducerGlobalState"

const initialState={
    products:[]
}
 
export const StateGlobalProvider = ({children}) => {
  
const [stateGlobal, dispatch] = useReducer(ReducerGlobalState, initialState)

const obtenerProductos=(productos)=>{
    dispatch({
        type:TypeReducer.obtenerProductos,
        payload:productos
    })
}


return(
<ContextGlobal.Provider value={{
    products:stateGlobal.products,
    obtenerProductos
    }}>
{children}
</ContextGlobal.Provider>
)}

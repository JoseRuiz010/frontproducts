import { useReducer } from "react"
import { TypeReducer } from "../types/TypeReducer"
import { ContextGlobal } from "./ContextGlobal"
 
import { ReducerGlobalState } from "./ReducerGlobalState"

const initialState={
    products:[], 
    user:null
}
 
export const StateGlobalProvider = ({children}) => {
  
const [stateGlobal, dispatch] = useReducer(ReducerGlobalState, initialState)

const obtenerProductos=(productos)=>{
    dispatch({
        type:TypeReducer.obtenerProductos,
        payload:productos
    })
}

const login=()=>{
    dispatch(
        {type: TypeReducer.login,
        payload: {
            user:' admin'
        }}
    )
}
const logout=()=>{
    dispatch(
        {type: TypeReducer.login,
        payload: null}
    )
}

return(
<ContextGlobal.Provider value={{
    products:stateGlobal.products,
    user: stateGlobal.user,
    obtenerProductos,
    login,
    logout
    }}>
{children}
</ContextGlobal.Provider>
)}

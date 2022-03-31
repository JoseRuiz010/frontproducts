import { useReducer } from "react"
import { TypeReducer } from "../types/TypeReducer"
import { ContextGlobal } from "./ContextGlobal"
 
import { ReducerGlobalState } from "./ReducerGlobalState"

const initialState={
    products:[], 
    user:null,
    error:null,
    carrito:[]
}
 
export const StateGlobalProvider = ({children}) => {
  
const [stateGlobal, dispatch] = useReducer(ReducerGlobalState, initialState)

const obtenerProductos=(productos)=>{
    dispatch({
        type:TypeReducer.obtenerProductos,
        payload:productos
    })
}

const setError=(mensaje)=>{
    dispatch(
        {type: TypeReducer.setError,
        payload: mensaje}
    )
}

const login=(user)=>{
    if(user.messaje) setError(user.messaje)
    if (!user.user) return
    dispatch(
        {type: TypeReducer.login,
        payload: user}
    )
    dispatch(
        {type: TypeReducer.setError,
        payload: null}
    )
}
const logout=()=>{
    dispatch(
        {type: TypeReducer.login,
        payload: null}
    )
    dispatch(
        {type: TypeReducer.setError,
        payload: null}
    )
}
const AgregarAlCarrito=(producto)=>{
    dispatch(
        {type: TypeReducer.agregarAlCarrito,
        payload: producto}
    )
   
}
const QuitarAlCarrito=(producto)=>{
  console.log(producto);
 dispatch(
     {type: TypeReducer.quitarAlCarrito,
         payload: producto}
     )
    
}
return(
<ContextGlobal.Provider value={{
    products:stateGlobal.products,
    user: stateGlobal.user,
    error:stateGlobal.error,
    carrito:stateGlobal.carrito,
    obtenerProductos,
    login,
    logout, 
    AgregarAlCarrito,
    QuitarAlCarrito
    }}>
{children}
</ContextGlobal.Provider>
)}

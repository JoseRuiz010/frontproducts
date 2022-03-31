import {
    TypeReducer
} from "../types/TypeReducer";



export const ReducerGlobalState = (stateGlobal, action) => {
    switch (action.type) {

        case TypeReducer.obtenerProductos:
            return {
                ...stateGlobal, products: action.payload
            };

        case TypeReducer.getProductos:
            return stateGlobal;

        case TypeReducer.login:
            return { ...stateGlobal, user: action.payload };

        case TypeReducer.logout:
            return { ...stateGlobal, user: action.payload };

        case TypeReducer.setError:
            return { ...stateGlobal, error: action.payload };
        case TypeReducer.agregarAlCarrito:
            return { ...stateGlobal, 
                carrito:{...stateGlobal.carrito,
                    prod:  stateGlobal.carrito.prod.filter(c=>c.producto===action.payload).length<1?
                    [...stateGlobal.carrito.prod,{producto:action.payload, cantidad:1}]
                    :stateGlobal.carrito.prod.map(c=>c.producto===action.payload?{...c,cantidad:c.cantidad+1} :c),
                    
                    total:stateGlobal.carrito.total+action.payload.price
                
                }
                
                }
        case TypeReducer.quitarAlCarrito:
            return { ...stateGlobal, 
                carrito:{...stateGlobal.carrito,
                    prod:  stateGlobal.carrito.prod.find(c=>c.producto===action.payload).cantidad===1?
                    stateGlobal.carrito.prod.filter(p=>p.producto!==action.payload)
                    :stateGlobal.carrito.prod.map(c=>c.producto===action.payload?{...c,cantidad:c.cantidad-1} :c) ,
                
                    total:stateGlobal.carrito.total-action.payload.price
                }
                }

            default:
            return stateGlobal;
    }
}
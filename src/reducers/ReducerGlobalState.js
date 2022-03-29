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

        default:
            return stateGlobal;
    }
}
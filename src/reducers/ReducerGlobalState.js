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
            default:
            return stateGlobal;
    }
}
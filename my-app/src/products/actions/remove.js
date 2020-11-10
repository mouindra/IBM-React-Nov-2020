import productsApi from '../services/productsApi';

function remove(product) {
    return function(dispatch){
        productsApi
            .remove(product)
            .then(() => {
                const action = { type: "REMOVE_PRODUCT", payload: product };
                dispatch(action);
            })
        
    }
}

export default remove;
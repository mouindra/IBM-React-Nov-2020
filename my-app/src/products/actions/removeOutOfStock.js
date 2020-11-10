import productsApi from '../services/productsApi';
import remove from './remove';

function removeOutOfStock(products /* to be fixed */) {
    return function(dispatch){
        const productsToRemove = products.filter(p => p.isOutOfStock);
        productsToRemove
            .forEach(productToRemove => {
                remove(productToRemove)(dispatch);
            });
    }
}

export default removeOutOfStock;
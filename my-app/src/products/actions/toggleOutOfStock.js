import productsApi from '../services/productsApi';

function toggleOutOfStock(product) {
    return function(dispatch){
        const updatedProductData = { ...product, isOutOfStock: !product.isOutOfStock };
        productsApi
            .save(updatedProductData)
            .then(updatedProduct => {
                const action = {
                  type: "UPDATE_PRODUCT",
                  payload: updatedProduct
                };
                dispatch(action);
            })
        
    }
}

export default toggleOutOfStock;


/* function toggleOutOfStock(product){
    const updatedProduct = { ...product, isOutOfStock : !product.isOutOfStock };
    const action = { type : 'UPDATE_PRODUCT' , payload : updatedProduct };
    return action;
}

export default toggleOutOfStock; */
import productsApi from '../services/productsApi';

function addNew(name, description, price, category){
    return function(dispatch){
        const newProductData = {
            id: 0,
            name: name,
            description: description,
            price: price,
            isOutOfStock: false,
            category: category
        };

        productsApi
            .save(newProductData)
            .then(newProduct => {
                const action = { type: "ADD_PRODUCT", payload: newProduct };
                dispatch(action);
            })
    };
    
}

export default addNew;
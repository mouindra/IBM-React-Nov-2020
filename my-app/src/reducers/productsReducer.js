function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_PRODUCT') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'UPDATE_PRODUCT') {
        const updatedProduct = action.payload;
        const newState = currentState.map(p => p.id === updatedProduct.id ? updatedProduct : p);
        return newState;
    }
    if (action.type === 'REMOVE_PRODUCT') {
        const newState = currentState.filter(p => p.id !== action.payload.id);
        return newState;
    }
    if (action.type === 'REMOVE_MANY_PRODUCTS') {
        const productsToRemove = action.payload;
        const newState = currentState.filter(p => !productsToRemove.find(prod => prod.id === p.id));
        return newState;
    }
    if (action.type === 'INIT_PRODUCTS'){
        return action.payload;
    }
    return currentState;
}

export default productsReducer;
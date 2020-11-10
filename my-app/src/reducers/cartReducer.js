function cartReducer(currentState = [], action) {
    if (action.type === 'ADD_TO_CART') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'REMOVE_FROM_CART') {
        const newState = currentState.filter(c => c.cartId !== action.payload.cartId);
        return newState;
    }
    if (action.type === 'UPDATE_CART') {
        const newState = currentState.map((c) => {
            if(c.cartId === action.payload.cartId){
                c.noOfItem = action.payload.noOfItem;
            }
            return c;
        })
        return newState;
    }
    if (action.type === 'INIT_CART'){
        return action.payload;
    }
    return currentState;
}

export default cartReducer;
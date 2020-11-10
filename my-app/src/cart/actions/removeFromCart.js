import cartApi from '../services/cartApi';

function removeFromCart(id, product){
    return function(dispatch){
        cartApi
            .getById(id)
            .then((cartItem) => {
                if(cartItem.noOfItem > 1){
                    // update
                    cartItem.noOfItem = cartItem.noOfItem -1;
                   return cartApi.save(cartItem).then((response) => {
                       return({
                            ...product,
                            cartId: response.id,
                            productId: response.productId,
                            noOfItem: response.noOfItem
                       })
                    });
                    
                }else {
                    // remove
                    return cartApi.remove(cartItem).then();
                }
            })
            .then((cartItem) => {
                const action ={}
                if(Object.keys(cartItem).length === 0 && cartItem.constructor === Object){
                    action.type= 'REMOVE_FROM_CART';
                    action.payload= product ;
                }else{
                    action.type= 'UPDATE_CART';
                    action.payload= cartItem ;
                }
                dispatch(action);
            })
    }
}

export default removeFromCart;
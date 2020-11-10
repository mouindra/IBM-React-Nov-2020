import cartApi from '../services/cartApi';

function addToCart(id, product){
    return function(dispatch){
        const newCartData = {
            id: 0,
            productId: id,
            noOfItem: 0
        };

        cartApi
            .getAll()
            .then((cartItems)=>{
                return cartItems.filter((val)=>val.productId === id);
            })
            .then((response) => {
                if(response.length > 0){
                    newCartData.noOfItem = response[0].noOfItem + 1;
                    newCartData.id = response[0].id;
                }else{
                    newCartData.noOfItem = 1;
                }

                cartApi
                .save(newCartData)
                .then(newCart => {
                    let action = {};
                    if(newCart.noOfItem === 1){
                        action = { type: "ADD_TO_CART", payload: {...product, cartId:newCart.id, noOfItem:newCart.noOfItem, productId: newCart.productId }};
                    }else{
                        action = { type: "UPDATE_CART", payload: {...product, cartId:newCart.id, noOfItem:newCart.noOfItem, productId: newCart.productId }};
                    }
                    dispatch(action);
                })
            })

           
    }
}

export default addToCart;
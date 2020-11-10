import cartApi from '../services/cartApi';
import productApi from './../../products/services/productsApi';

    function cartLoad(){
        return function(dispatch){
            cartApi
            .getAll()
            .then(function(cartItems){
                return productApi
                        .getAll()
                        .then(function(productItems){ 
                            return (cartItems.map((val, index) => {
                                const product = productItems.filter(p => p.id === val.productId);
                                return {
                                    cartId: val.id,
                                    ...val,
                                    ...product[0]
                                }
                               
                            }))
                        })
            }).then((response) =>{
                const action = { type: "INIT_CART", payload: response };
                dispatch(action);
            })
        }
    }

export default cartLoad;
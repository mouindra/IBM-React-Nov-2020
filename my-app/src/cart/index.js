import React, { Component }from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CartList from "./views/CartList";

import cartActionCreators from './actions';

class Cart extends Component {
    componentDidMount() {
        this.props.cartLoad();
    }
    render(){
        const { cartItems, removeFromCart } = this.props;
        return(
            <div>
                <h3>Cart</h3>
                
                <hr />
                <CartList
                    cartProducts={cartItems}
                    remove={removeFromCart}
                />
            </div>
        )
    }

}

function mapStateToProps(storeState){
    const cartItems = storeState.cartItems;
    return { cartItems }
}

function mapDispatchToProps(dispatch){
    const cartActionDispatchers = bindActionCreators(cartActionCreators, dispatch);
    return cartActionDispatchers;
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
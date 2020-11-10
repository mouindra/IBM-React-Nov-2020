import React, { Component } from 'react';
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const { cartProducts, remove } = this.props;
        const cartItems = cartProducts.map(product => (
            <CartItem
                key={product.cartId}
                product={product}
                remove={remove}
            />
        )
        );

       const totalNoOfItems = cartProducts.reduce((total, product ) => total + parseInt(product.noOfItem), 0 );
        return (
            <div>
                <div>
                    <label>Total number Of items in cart: </label>
                    <span>{totalNoOfItems}</span>
                </div>
                <section className="list">
                    <ol>
                        {cartItems}
                    </ol>
                </section>
            </div>
        )
    }
}

export default CartList;

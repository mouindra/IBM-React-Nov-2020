import React, { Component } from "react";
class CartItem extends Component{
    render(){
        const { product, remove } = this.props, 
            { id, name, description, price, isOutOfStock, category, noOfItem, cartId } = product;
        return(
            <li>
                <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>{name}</span><span> [{category}] </span>
                <div>{description}</div>
                <div className="price">Rs.{price}</div>
                <div>
                    <label htmlFor="">No Of Items: </label>
                    <span >{noOfItem}</span>
                </div>
                <br/>
                <input type="button" value="Remove From Cart" onClick={ () => remove(cartId, product) }/>
            </li>
        )
    }
}

export default CartItem;
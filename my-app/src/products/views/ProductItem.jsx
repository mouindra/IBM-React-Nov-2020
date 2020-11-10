import React, { Component } from "react";
class ProductItem extends Component{
    onAddToCartClick = (id, product) => {
        this.props.addToCart(id, product);
    }
    render(){
        const { product, toggleOutOfStock, remove, addToCart } = this.props, 
            { id, name, description, price, isOutOfStock, category } = product;
        return(
            <li>
                <input type="button" className="addtocart" value="Add to cart" onClick={ () => this.onAddToCartClick(id, product) } />
                <span className={'name ' + (isOutOfStock ? 'outofstock' : '')}>{name}</span><span> [{category}] </span>
                <div>{description}</div>
                <div className="price">Rs.{price}</div>
                <input type="checkbox" 
                    checked={isOutOfStock} 
                    onChange={ () => toggleOutOfStock(product)}
                />
                <label htmlFor="">Out of Stock</label>
                <br/>
                <input type="button" value="Remove" onClick={ () => remove(product) } />
            </li>
        )
    }
}

export default ProductItem;
import React, { Component } from "react";
class ProductItem extends Component{
    render(){
        const { product, toggleOutOfStock, remove } = this.props, 
            { id, name, description, price, isOutOfStock, category } = product;
        return(
            <li>
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
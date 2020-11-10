import React, { Component } from 'react';

class ProductStats extends Component {
    render() {
        const { products } = this.props;
        const outOfStockCount = products.reduce((result, product) => product.isOutOfStock ? result + 1 : result, 0);
        return (
            <section className="stats">
                <span className="outofstock">{outOfStockCount}</span>
                <span> / </span>
                <span>{products.length}</span>
            </section>
        )
    }
}

export default ProductStats;
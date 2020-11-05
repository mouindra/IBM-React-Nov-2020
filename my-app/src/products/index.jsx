import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './index.css';
import productActionCreators from './actions';


class Products extends Component {
    render() {
        const { data, toggleOutOfStock, remove, removeOutOfStock, addNew, categoriesData } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} categoriesData={categoriesData}/>
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products;
    const categoriesData = storeState.categories;
    return { data : products, categoriesData: categoriesData };
}

function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);


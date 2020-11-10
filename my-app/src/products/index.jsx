import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ProductStats from './views/ProductStats';
import ProductEditor from './views/ProductEditor';
import ProductsList from './views/ProductsList';
import './index.css';
import productActionCreators from './actions';
import cartActionCreators from './../cart/actions';



class Products extends Component {
    componentDidMount() {
        this.props.load();
    }
    render() {
        const { data, toggleOutOfStock, remove, removeOutOfStock, addNew, categories, load, addToCart } = this.props;
        return (
            <div>
                <h3>Products</h3>
                
                <hr />
                <ProductStats products={data} />
                <ProductEditor addNew={addNew} categories={categories}/>
                <ProductsList
                    products={data}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                    addToCart= {addToCart}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products,
        categories = storeState.categories.categoryList,
        selectedCatgory = storeState.categories.selectedCategory;

    if (selectedCatgory !== 0)
        return { data : products.filter(p => p.category === selectedCatgory), categories };
    return { data : products, categories};
}

function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(Object.assign({},productActionCreators,cartActionCreators), dispatch);
    return productActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);


import React, { Component } from 'react';

class ProductEditor extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        category: ''
    };

    onAddNewProductClick = () => {
        const { addNew } = this.props,
            { name, description, price, category } = this.state;
        addNew(name, description, price,category);
    };

    onCategoryChange = (evt) => {
        console.log(evt.target.value)
        this.setState({ category: evt.target.value })
    }
    render() {
        const { categoriesData } = this.props;
        console.log(categoriesData);
        const categoryItems = categoriesData.map(category => (
                            <option key={category.id} >{category.name}</option>
                            
                        ));
        return (
            <section className="edit">
                <div className="field">
                    <label htmlFor="">Name :</label>
                    <input type="text" onChange={evt => this.setState({ name: evt.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Description :</label>
                    <input type="text" onChange={evt => this.setState({ description: evt.target.value })} />
                </div>
                <div className="field">
                    <label htmlFor="">Price :</label>
                    <input type="number" onChange={evt => this.setState({ price: parseInt(evt.target.value) })} />
                </div>
                <div className="field">
                    <label htmlFor="">Category</label>
                    <select onChange ={(e) => this.onCategoryChange(e)}>
                       {categoryItems}
                    </select>
                </div>
                <div className="field">
                    <input type="button" value="Add Product" onClick={this.onAddNewProductClick} />
                </div>
            </section>
        )
    }
}

export default ProductEditor;
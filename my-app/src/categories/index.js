import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import categoryActionCreators from './actions';
import './index.css';

class Categories extends Component{
    state = {
        newCategorName : ''
    };

    onAddNewClick = () => {
        this.props.addNew(this.state.newCategorName);
    }

    componentDidMount() {
        this.props.load();
    }

    render(){
        const { data, selected, setSelected, load } = this.props;
        return(
            <div>
                <h3>Categories</h3>
                <hr/>
                <label>Category Name :</label>
                <input type="text" onChange={ evt => this.setState({ newCategorName : evt.target.value})} />                
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
                <ol>
                    { 
                        data.map(category => (
                            <li 
                                key={category.id} 
                                onClick={ () => setSelected(category.id) }
                                className = {category.id === selected ? 'selected' : '' }
                            >
                                {category.name} 
                            </li>)
                        ) 
                    }
                </ol>
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const categories = storeState.categories.categoryList,
        selected = storeState.categories.selectedCategory
    return { data : categories, selected : selected };
}

function mapDispatchToProps(dispatch){
    const categoryActionDispatchers = bindActionCreators(categoryActionCreators, dispatch);
    return categoryActionDispatchers
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
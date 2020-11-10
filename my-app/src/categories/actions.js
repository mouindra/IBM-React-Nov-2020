import categoryApi from './services/categoryApi';
import load from './load';

function addNew(categoryName){
    return function (dispatch){        
        const newCategory = { 
            id : 0, 
            name : categoryName
        };

        categoryApi
        .save(newCategory)
        .then(newCategory => {
            const action = { type: "ADD_CATEGORY", payload: newCategory };
            dispatch(action);
        })
    }
}

function setSelected(category){
    return function(dispatch){
        categoryApi
        .getById(category)
        .then(category => {
            const action = { type: "SET_SELECTED_CATEGORY", payload: category.id };
            dispatch(action);
        })
    }
}

const categoryActionCreators = { 
    addNew, setSelected, load
};


/* let newCategoryId = 0;
const categoryActionCreators = { 
    

       
    setSelected(category){
        const action = { type : 'SET_SELECTED_CATEGORY', payload : category};
        return action;
    }
}
 */
export default categoryActionCreators;


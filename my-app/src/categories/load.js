import categoryApi from './services/categoryApi';

function load(){
    return function(dispatch){
        categoryApi
            .getAll()
            .then(function(categories){
                const action = { type: "INIT_CATEGORY", payload: categories };
                dispatch(action);
            });
    }
}

export default load;
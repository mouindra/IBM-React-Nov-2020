const initialState = { 
    categoryList : [],
    selectedCategory : 0
};

function categoriesReducer(currentState = initialState, action){
    if (action.type === 'ADD_CATEGORY')
        return {...currentState, categoryList : [...currentState.categoryList, action.payload] };
    if (action.type === 'SET_SELECTED_CATEGORY')
        return {...currentState, selectedCategory : action.payload }
    if (action.type === 'INIT_CATEGORY'){
        return {...currentState, categoryList : action.payload};
    }
    return currentState;
}

export default categoriesReducer;


/* function categoriesReducer(currentState = [], action){
    if (action.type === 'ADD_CATEGORY')
        return [...currentState, action.payload];
    return currentState;
}

export default categoriesReducer; */
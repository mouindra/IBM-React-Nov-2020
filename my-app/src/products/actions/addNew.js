let newProductId = 0;

function addNew(name, description, price, category){
    const newProduct = {
        id : ++newProductId,
        name : name,
        description : description,
        price : price,
        isOutOfStock : false,
        category: category
    };
    const action = { type : 'ADD_PRODUCT' , payload : newProduct};
    return action;
}

export default addNew;
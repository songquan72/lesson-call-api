import * as Types from "./../contants/ActionTypes";
var initialState = [];

var findIndex =(products, id) =>  {
    var index = -1;
    index = products.findIndex((product)=> {
        return product.id === id;
    })

    return index;
}

 const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            index = findIndex(state,action.id);
            state.splice(index,1);
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state,action.id);
            state[index] = action.product;
            return [...state];
        default:
            return [...state];
    }
}
export default products;
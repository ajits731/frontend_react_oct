const initial_state = {
    products: [],
    product_details: {id:1}
};

const ProductsReducer = (state=initial_state,action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            console.log('Set Products reducer is called', action);
            return {
                ...state, 
                products: action.payload
            }

        case 'SET_ONE_PRODUCT':
            console.log('Set Products reducer is called', action);
            return {
                ...state, 
                products: state.products.concat(action.payload)
            }    

        default:
            return state
    }
}

export default ProductsReducer;


import axios from "axios"

export const SetProducts = () => {
    return function(dispatch) {
        axios.get('https://fakestoreapi.com/products').then((response) => dispatch({
            type: 'SET_PRODUCTS',
            payload: response.data
        }))
    }
}
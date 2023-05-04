import axios from "axios"
import { setProducts, setUserAuth } from "../counterSlice";

export const SetProducts = () => {
    return function(dispatch) {
        axios.get('https://fakestoreapi.com/products').then((response) => dispatch(setProducts({payload: response})))
    }
}

export const handleLogin = (creds) => {
    console.log('Checking creds:', {creds});
    const url='http://localhost:3001/login';
    return function(dispatch) {
        axios.post(url, creds)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            dispatch(setUserAuth());
        })
        .catch((err) => console.log('Login Error:', err));
    }
}


export const GetUserDetails = () => {
    const url='http://localhost:3001/getUser';
    return function(dispatch) {
        axios.get(url, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then((res) => console.log('Get User Response:', res));
    }
}

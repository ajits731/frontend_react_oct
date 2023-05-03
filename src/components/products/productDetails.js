import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import store from '../../store';

const ProductDetails = () => {
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((response) => setProductDetails(response));   
        
    }, []);

    useEffect(() => {
        console.log('productDetails:', productDetails)
    });

    store.subscribe(() => {
        var state = store.getState();
        console.log('State Product Details:', state);
    })

    return(
        <>
            <h2>Product Title: {productDetails.title}</h2>
            <button className="btn" onClick={() => store.dispatch({type: 'SET_PRODUCTS', payload:[]})}>Test Product Details</button>
            <img src={productDetails.image} style={{width:'10em'}} />
            <p>{productDetails.description}</p>
        </>
    )
}

export default ProductDetails;



import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    return(
        <>
            <h2>Product Title: {productDetails.title}</h2>
            <img src={productDetails.image} style={{width:'10em'}} />
            <p>{productDetails.description}</p>
        </>
    )
}

export default ProductDetails;
import { useEffect, useState } from "react";
import CardComponent from "../../common/card";

const Products = () => {
    console.log('Products')
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((response) => setProducts(response))
    }, []);

    useEffect(() => {
        console.log('Products:' , products);
    });
    return(
        <>
            <h2>Products Page</h2>
            <div className="product-main">
            { products.length>0 && products.map((product) => <CardComponent product={product} />) }
            </div>
        </>
    )
}

export default Products;
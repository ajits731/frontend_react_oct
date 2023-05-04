import { useEffect, useState } from "react";
import CardComponent from "../../common/card";
import store from '../../store';
import { SetProducts } from "../../action/action";

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {useSelector, useDispatch} from 'react-redux';
import { setProducts, updateCounter } from "../../counterSlice";

const Products = () => {
    console.log('Products')
    //redux toolkit
    const counterRedux = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    return(
        <>
            <><h2>Products Page</h2>
            <ButtonGroup aria-label="Basic example">
            <button className="btn" onClick={() => dispatch(updateCounter())}>Trigger action</button>
            </ButtonGroup>
            {counterRedux}
            <div className="product-main">
            {/* { products.length>0 && products.map((product) => <CardComponent product={product} />) } */}
            </div></>
        </>
    )
}

export default Products;
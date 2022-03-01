import React from "react";
import "./Product.css";

function Product({span, image, titleBag, price}) {
    return(
        <article>
            <span>{span}</span>
            <img src={image} alt=""/>
            <p>{titleBag}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product;
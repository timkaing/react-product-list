import React from 'react';

const Product = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <sub>{props.category}</sub>1
            <p>{props.description}</p>
            <p>${props.price}</p>
        </div>
       
    )
}

export default Product
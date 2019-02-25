import React from 'react';
import { formatPrice } from './utils'

const Product = ({ name, category, description, price }) => {
    return(
        <div>   
            <h1>{name}</h1>
            <sub>{category}</sub>1
            <p>{description}</p>
            <p>{formatPrice(price)}</p>
        </div>
       
    )
}

export default Product
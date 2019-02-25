import React from 'react';

const CategoryButton = (props) => {
    return(
        <button onClick={() => {
            props.setCat()
        }}>{props.category}</button>
    )
}

export default CategoryButton

// setCategory(selectedCategory) {
//     console.log(selectedCategory)
//     this.setState({currentCategory:selectedCategory}) // can't change state itself
// }
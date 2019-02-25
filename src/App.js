import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';

// stateless componenets
import CategoryButton from './CategoryButton'
import Product from './Product'

class App extends Component {
  constructor(props) { // function that gets called once, when that specific component is mounted to the dom
    super(props)

    this.state = { currentCategory: null } // where you initialize the state of the component
  }

  setCategory(selectedCategory) {
    console.log(selectedCategory)
    this.setState({currentCategory:selectedCategory}) // can't change state itself
  }

  getProduct() {
    // map, filter, reduce
    if (this.state.currentCategory === null) {
      return inventory.map(i => <Product {...i} />)
    }
    return inventory.filter((i) => { // filter returns a new array -- know methods if they return new info or modify
      // if category is all then true otherwise match the category 
      return this.state.currentCategory === i.category
    }).map(i => <Product {...i} />) // deconstructs
  }

  render() {
    return (
      <div className="App">
        <div className="Yo">
          <h1>Show products here</h1>
        </div>
        
        <div className="sup">
          <ul id="buttons">
            {categories.map(c => <CategoryButton setCat={()=> { // anonyomus function
              this.setCategory(c)
            }} category={c} />)}

            <CategoryButton setCat={()=> {
              this.setCategory(null)
            }} category={"All"} />
          </ul>
        </div>

        <div className="bye">
          <ul id="products">
            {this.getProduct()}
          </ul>
        </div>

      </div>
    );
  }
}

export default App;

// const obj = {a:11, b:22, c:33 }

// const newObj = { ...obj, b: 55, d: 77} // { a:11, b:55, c:33, d:77 }

// class MyClass extends Component {
//   constructor(num) {
//     super(num)

//   }
// }
// new MyClass(66)

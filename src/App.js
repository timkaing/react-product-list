import React, { Component } from 'react';
import inventory, { categories } from './inventory'
import './App.css';
import CategoryButton from './CategoryButton'
import Product from './Product'

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Show products here</h1>

        <ul>
          {categories.map(c => <CategoryButton category={c}></CategoryButton>)}
        </ul>

        <ul>
          {inventory.map(i => <Product name={i.name} description={i.description} price={i.price} category={i.category}></Product>)}
        </ul>

      </div>
    );
  }
}

export default App;

import { useState } from 'react'
import PRODUCTS from './Components/Products/Products';
import Product from './Components/Products/Product';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const PizzaShow = () => {
    return PRODUCTS.map((product, index) => {
      return (
        <Product key={index} name={product.name} image={product.image} price={product.price} description={product.description} />
      );
    });
  };

  return (
    <>
    {PizzaShow()}
    </>
  )
}

export default App

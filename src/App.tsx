import { useState } from 'react'
import PRODUCTS from './Components/Products/Products';
import Product from './Components/Products/Product';
import './App.css'

type Order = {
  name: string;
}

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const onCardClick = (name: string) => {
    const currentId = PRODUCTS.filter((product) => product.name === name);
    setOrders((prevState) => [...prevState, {name: currentId[0].name}]);
  };

  const PizzaShow = () => {
    return PRODUCTS.map((product, index) => {
      return (
        <Product key={index} name={product.name} image={product.image} price={product.price} description={product.description} onCardClick={() => onCardClick(product.name)} />
      );
    });
  };

  const ShowOrder = () => {
    if(orders.length > 0){
      return orders.map((order, index) => {
        return (
          <div key={index}>{order.name}</div>
        );
      });
    }
    return ('Nothing');
  };

  return (
    <div className='container d-flex justify-content-between'>
      <div className='order-details flex-grow-1'>
        Order Details: 
        {ShowOrder()}
      </div>
      <div className='add-pizza flex-grow-1'>
        {PizzaShow()}
      </div>
    </div>
  )
}

export default App

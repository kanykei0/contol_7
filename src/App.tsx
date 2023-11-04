import { useMemo, useState } from 'react';
import PRODUCTS from './Components/Products/Products';
import PizzasList from './Components/Pizza/PizzaList';
import CalculateTotalPrice from './Components/Calculator/CalculateTotal';
import './App.css';

type Order = {
  name: string;
  amount: number;
}

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const onCardClick = (name: string) => {
    const currentId = PRODUCTS.filter((product) => product.name === name);

    if(currentId) {
      const existOrder = orders.find((order) => order.name === currentId[0].name);
      if(existOrder) {
        existOrder.amount += 1;
        setOrders([...orders]);
      } else {
        setOrders([...orders, { name: currentId[0].name, amount: 1 }]);
      }
    }
  }

  const deletePizza = (name: string) => {
    setOrders ((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, amount: Math.max(0, item.amount - 1) } : item
      )
    )
  };

  const ShowOrder = useMemo(() => {
    if(orders.length > 0) {
      return orders.map((order) => {
        if(order.amount !== 0){
          return (
          <div key={order.name}>
            Пицца: {order.name} x {order.amount}
            <button onClick={() => deletePizza(order.name)}>delete</button>
          </div>
          );
        }
      });
    }
    return 'Nothing';
  }, [orders]);

  return (
    <div className='container d-flex justify-content-between'>
      <div className='order-details flex-grow-1'>
        <div className='d-flex justify-content-between'>
          <p>Order Details:</p>
          <p>Total: {CalculateTotalPrice(orders)} сом</p>
        </div> 
        {ShowOrder}
      </div>
      <div className='add-pizza flex-grow-1'>
        <PizzasList products={PRODUCTS} onCardClick={onCardClick}/>
      </div>
    </div>
  )
}

export default App

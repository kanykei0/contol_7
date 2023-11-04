import { useMemo, useState } from "react";
import PRODUCTS from "./Components/Products/Products";
import PizzasList from "./Components/Pizza/PizzaList";
import {
  CalculateTotalPrice,
  calculateProductTotal,
} from "./Components/Calculator/CalculateTotal";
import { OrderType } from "./types";
import "./App.css";

function App() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const onCardClick = (name: string) => {
    const currentId = PRODUCTS.filter((product) => product.name === name);

    if (currentId) {
      const existOrder = orders.find(
        (order) => order.name === currentId[0].name
      );
      if (existOrder) {
        existOrder.amount += 1;
        setOrders([...orders]);
      } else {
        setOrders([
          ...orders,
          { name: currentId[0].name, amount: 1, price: currentId[0].price },
        ]);
      }
    }
  };

  const deletePizza = (name: string) => {
    setOrders((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, amount: Math.max(0, item.amount - 1) }
          : item
      )
    );
  };

  const ShowOrder = useMemo(() => {
    if (orders.length > 0) {
      return orders.map((order) => {
        if (order.amount !== 0) {
          return (
            <div className="card mb-2" key={order.name}>
              <div className="card-body d-flex justify-content-between align-items-center">
                <p className="mb-0 p-2">
                  {order.name} x {order.amount}
                </p>
                <div className="d-flex flex-grow-1 justify-content-end">
                  <p className="mb-0">
                    {calculateProductTotal(order.price, order.amount)} сом
                  </p>
                </div>
                <button
                  className="btn btn-danger ms-4"
                  onClick={() => deletePizza(order.name)}
                >
                  X
                </button>
              </div>
            </div>
          );
        }
      });
    } else {
      return <div className="text-secondary">Добавьте что-нибудь</div>;
    }
  }, [orders]);

  return (
    <>
      <h1 className="text-center py-4">Attractor's Pizza</h1>
      <div className="container row mx-auto">
        <div className="order-details col-5 mt-4 px-5">
          <div className="d-flex justify-content-between mt-4">
            <p className="fw-bold">Детали заказа:</p>
            <p className="fw-bold">Сумма: {CalculateTotalPrice(orders)} сом</p>
          </div>
          <hr />
          {ShowOrder}
        </div>
        <div className="add-pizza col-7">
          <PizzasList products={PRODUCTS} onCardClick={onCardClick} />
        </div>
      </div>
    </>
  );
}

export default App;

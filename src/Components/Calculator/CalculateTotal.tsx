import { OrderType } from "../../types";
import PRODUCTS from "../Products/Products";

export const CalculateTotalPrice = (orders: OrderType[]) => {
  return orders.reduce((acc, order) => {
    const product = PRODUCTS.find((product) => order.name === product.name);
    return acc + (product?.price || 0) * order.amount;
  }, 0);
};

export const calculateProductTotal = (arr: number, amount: number) => {
  return arr * amount;
};

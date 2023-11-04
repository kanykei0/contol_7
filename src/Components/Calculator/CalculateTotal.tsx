import { OrderType } from "../../type";
import PRODUCTS from "../Products/Products";

const CalculateTotalPrice = (orders: OrderType[]) => {
    return orders.reduce((acc, order) => {
        const product = PRODUCTS.find((product) => order.name === product.name);
        return acc + (product?.price || 0) * order.amount;
    }, 0);
};

export default CalculateTotalPrice;
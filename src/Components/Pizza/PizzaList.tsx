import { ProductType } from "../../type";
import Product from "../Products/Product";

interface Props {
    products: ProductType[];
    onCardClick: (name: string) => void;
}

const PizzasList: React.FC<Props> = ({products, onCardClick}) => {
    return products.map((product, index) => {
        return (
            <Product key={index} name={product.name} image={product.image} price={product.price} description={product.description} onCardClick={() => onCardClick(product.name)} />
        );
    });
};

export default PizzasList;
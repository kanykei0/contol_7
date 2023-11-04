import React from "react";

interface ProductItem {
    name: string;
    image: string;
    price: number;
    description: string;
}

const Product: React.FC<ProductItem> = ({name, image, price, description}) => {
    return(
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <p>{name}</p>
                <p>Цена: {price} сом</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Product;
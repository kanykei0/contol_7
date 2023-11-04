import React from "react";

interface ProductItem {
    name: string;
    image: string;
    price: number;
    description: string;
    onCardClick: React.MouseEventHandler;
}

const Product: React.FC<ProductItem> = ({name, image, price, description, onCardClick}) => {
    return(
        <div onClick={onCardClick} className="pizza">
            <div>
                <img className="pizza-img" src={image} alt={name} />
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
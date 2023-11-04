import React from "react";

interface ProductItem {
  name: string;
  image: string;
  price: number;
  description: string;
  onCardClick: React.MouseEventHandler;
}

const Product: React.FC<ProductItem> = ({
  name,
  image,
  price,
  description,
  onCardClick,
}) => {
  return (
    <div onClick={onCardClick} className="pizza card mb-3">
      <div className="card-body d-flex">
        <div className="col">
          <img className="pizza-img" src={image} alt={name} />
        </div>
        <div className="col-lg-8">
          <p className="fs-2">{name}</p>
          <p>Цена: {price} сом</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;

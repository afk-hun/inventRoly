import React, { FC } from "react";
import { ProductType } from "../../utils/containers";
import "./ResultItem.scss";

const ResultItem = (props: { product: ProductType }) => (
  <div className="ResultItem">
    <div className="ResultItem-image"> image </div>
    <div className="ResultItem-details">
      <p>Price: {props.product.price}</p>
      <p>Name: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Grocery: {props.product.shop.name}</p>
    </div>
  </div>
);

export default ResultItem;

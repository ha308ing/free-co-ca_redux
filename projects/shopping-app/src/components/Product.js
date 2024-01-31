import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { useSelector } from "react-redux";

import "./Product.css";
import { ButtonChange } from "./ButtonChange";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = () => {
    dispatch(cartActions.incrementCart({ id, price, name }));
  };

  const isInCart = !!cartItems[id];

  const itemCartControl = isInCart ? (
    <>
      {cartItems[id].count}
      <ButtonChange name={name} id={id} price={price} />
    </>
  ) : (
    <button onClick={handleAddToCart}>Add to cart</button>
  );

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      {itemCartControl}
    </div>
  );
};

export default Product;

import React from "react";
import "./Cart.css";
import { ButtonChange } from "./ButtonChange";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const CartItem = ({ name, count, total, price, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(cartActions.removeFromCart(id));
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{count}</p>
      <article>Total ${total}</article>
      <ButtonChange id={id} name={name} price={price} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default CartItem;

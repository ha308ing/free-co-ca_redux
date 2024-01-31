import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const quantity = useSelector(state => state.cart.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cart = useSelector(state => state.cart.items);
  console.log(cart);
  const cartItems = Object.entries(cart).map(
    ([id, { name, price, total, count }], index) => {
      console.log(index);
      return (
        <li key={id}>
          <CartItem
            id={id}
            price={price}
            name={name}
            total={total}
            count={count}
          />
        </li>
      );
    }
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>{cartItems}</ul>
    </div>
  );
};

export default CartItems;

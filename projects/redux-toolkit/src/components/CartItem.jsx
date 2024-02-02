import { ChevronDown, ChevronUp } from "../icons";
import {
  removeCartItem,
  decreaseCartItem,
  increaseCartItem,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const CartItem = ({ cartItem }) => {
  const { id, img, title, price, amount } = cartItem;
  const dispatch = useDispatch();

  const removeCartItemDispatch = () => dispatch(removeCartItem(id));
  const increaseCartItemDispatch = () => dispatch(increaseCartItem(id));
  const decreaseCartItemDispatch = () => dispatch(decreaseCartItem(id));

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={removeCartItemDispatch}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={increaseCartItemDispatch}>
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={decreaseCartItemDispatch}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

import { cartSelector } from "../features/cart/cartSlice";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cart = useSelector(cartSelector);
  return (
    <nav className="nav-center">
      <h3>NavBar</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{cart.amount}</p>
        </div>
      </div>
    </nav>
  );
};

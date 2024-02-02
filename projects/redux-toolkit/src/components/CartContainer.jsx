import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { useDispatch } from "react-redux";
import { cartSelector } from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

export const CartContainer = () => {
  const { cartItems, total, amount } = useSelector(cartSelector);

  const content =
    amount < 1 ? (
      <EmptyCart />
    ) : (
      <CartItems cartItems={cartItems} total={total} />
    );

  return <>{content}</>;
};

function EmptyCart() {
  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>
    </section>
  );
}

function CartItems({ cartItems, total }) {
  const dispatch = useDispatch();
  const openModalDispatch = () => dispatch(openModal());

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>
      <div>
        {cartItems.map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={openModalDispatch}>
          Clear cart
        </button>
      </footer>
    </section>
  );
}

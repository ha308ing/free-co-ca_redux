import { NavBar } from "./components/NavBar";
import { CartContainer } from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  cartItemsSelector,
  fetchCartItems,
  cartIsLoadingSelector,
} from "./features/cart/cartSlice";
import { useEffect } from "react";
import { Modal } from "./components/Modal";
import { selectModalState } from "./features/modal/modalSlice";

function App() {
  const cartItems = useSelector(cartItemsSelector);
  const modalState = useSelector(selectModalState);
  const cartIsLoading = useSelector(cartIsLoadingSelector);

  const dispatch = useDispatch();

  const calculateTotalsDispatch = () => dispatch(calculateTotals());

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  useEffect(() => {
    calculateTotalsDispatch();
  }, [cartItems]);

  return cartIsLoading ? (
    <div className="loading">
      <h1>Loading...</h1>
    </div>
  ) : (
    <main>
      {modalState && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;

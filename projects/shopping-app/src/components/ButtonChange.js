import { useDispatch } from "react-redux";
import { cartActions } from "./../store/cartSlice";

export const ButtonChange = ({ id, name, price }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.decrementCart({ id, price }));
  };
  const addHandler = () => {
    dispatch(
      cartActions.incrementCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </>
  );
};

import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";

export const sendCartData = cart => async dispatch => {
  dispatch(
    uiActions.setNotification({
      type: "warning",
      message: "Sending request to the database",
      open: true,
    })
  );

  const sendRequest = async () => {
    const request = await fetch(
      "https://redux-http-7280d-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "text/json",
        },
      }
    );
    if (request.ok) {
      dispatch(
        uiActions.setNotification({
          type: "success",
          message: "Sent request to the dabase successfully",
          open: true,
        })
      );
      /*         setTimeout(() => {
      dispatch(uiActions.setNotification({ open: false }));
    }, 2000); */
    } else {
      dispatch(
        uiActions.setNotification(
          uiActions.setNotification({
            type: "error",
            message: "Failed to send request to the database",
            open: true,
          })
        )
      );
    }
    const response = await request.json();
  };

  try {
    await sendRequest();
  } catch (error) {
    uiActions.setNotification(
      uiActions.setNotification({
        type: "error",
        message: error.message,
        open: true,
      })
    );
  }
};

export const getCartData = () => async dispatch => {
  const fetchData = async () => {
    const request = await fetch(
      "https://redux-http-7280d-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
    );
    const response = await request.json();
    return response;
  };

  try {
    const data = await fetchData();
    dispatch(cartActions.setCart(data));
  } catch (error) {
    uiActions.setNotification(
      uiActions.setNotification({
        type: "error",
        message: error.message,
        open: true,
      })
    );
  }
};

import React, { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "./components/Notification";
import { uiActions } from "./store/uiSlice";

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notificationStatus = useSelector(state => state.ui.notification);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      dispatch(
        uiActions.setNotification({
          type: "warning",
          message: "Sending request to the database",
          open: true,
        })
      );
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

    sendRequest().catch(err => {
      uiActions.setNotification(
        uiActions.setNotification({
          type: "error",
          message: err.message,
          open: true,
        })
      );
    });
  }, [cart]);

  const content = isLoggedIn ? <Layout /> : <Auth />;

  return (
    <div className="App">
      <Notification
        type={notificationStatus.type}
        message={notificationStatus.message}
      />
      {content}
    </div>
  );
}

export default App;

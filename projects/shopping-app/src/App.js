import React, { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from "./components/Notification";
import { uiActions } from "./store/uiSlice";
import { getCartData, sendCartData } from "./store/cartActions";

let isFirstRender = true;
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cart = useSelector(state => state.cart);
  const notificationStatus = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    console.log(cart.changed);
    if (cart.changed) dispatch(sendCartData(cart));
  }, [cart, dispatch]);

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

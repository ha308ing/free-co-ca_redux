import React from "react";
import "./Cart.css";
import { authActions } from "../store/authSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Logout</h3>
    </div>
  );
};

export default Logout;

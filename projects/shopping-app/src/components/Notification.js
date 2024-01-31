import { Alert } from "@mui/material";
// import "./Notification.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/uiSlice";

export const Notification = ({ type, message }) => {
  const isOpen = useSelector(state => state.ui.notification.open);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(uiActions.setNotification({ open: false }));
  };

  return (
    isOpen && (
      <Alert onClose={handleClose} className="notification" severity={type}>
        {message}
      </Alert>
    )
  );
};

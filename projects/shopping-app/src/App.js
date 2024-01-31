import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const content = isLoggedIn ? <Layout /> : <Auth />;
  return <div className="App">{content}</div>;
}

export default App;

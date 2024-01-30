import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { actions } from "./store";

function App() {
  const [input, setInput] = useState(0);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch(actions.increment());
  };
  const dec = () => {
    dispatch(actions.decrement());
  };
  const add = x => () => {
    dispatch(actions.add(x));
  };
  const changeInput = event => {
    setInput(parseInt(event.target.value) || 0);
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <input onChange={changeInput} type="number" />
      <button onClick={add(input)}>Add {input}</button>
    </div>
  );
}

export default App;

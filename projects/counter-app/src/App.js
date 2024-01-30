import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: "INCREMENT" });
  };
  const dec = () => {
    dispatch({ type: "DECREMENT" });
  };
  const add = x => () => {
    dispatch({ type: "ADD", payload: x });
  };
  const changeInput = event => {
    console.log(event.target.value);
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

import { createStore } from "redux";

const reducer = (state = { counter: 0 }, { type, payload }) => {
  // syncronous
  // no store mutation
  switch (type) {
    case "INCREMENT": {
      return { ...state, counter: state.counter + 1 };
    }
    case "DECREMENT": {
      return { ...state, counter: state.counter - 1 };
    }
    case "ADD": {
      return { ...state, counter: state.counter + payload };
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(reducer);

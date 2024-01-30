import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    add(state, action) {
      state.counter += action.payload;
    },
  },
});

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

/*

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


*/

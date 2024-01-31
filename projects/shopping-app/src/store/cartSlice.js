import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    total: 0,
    count: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const { id, price, name } = action.payload;
      console.log(action.payload);
      state.count += 1;
      state.total += price;
      if (!state.items[id]) state.items[id] = { count: 0, name };
      state.items[id].count += 1;
    },
    incrementCart(state, action) {
      console.log(state);
      const { id, price, name } = action.payload;
      console.log(action.payload);
      state.count += 1;
      state.total += price;

      if (!state.items[id])
        state.items[id] = { count: 0, name, total: 0, price: 0 };
      const currentCount = (state.items[id].count += 1);
      console.log(currentCount);
      state.items[id].total = currentCount * price;
      state.items[id].price = price;
    },
    decrementCart(state, action) {
      const { id, price } = action.payload;
      state.count -= 1;
      state.total -= price;

      const currentCount = (state.items[id].count -= 1);
      state.items[id].total = currentCount * price;

      if (state.items[id].count === 0) {
        const {
          [id]: {},
          ...rest
        } = state.items;
        state.items = rest;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const targetProduct = state.items[id];
      if (!!targetProduct) {
        state.total -= targetProduct.count * targetProduct.price;
        state.count -= targetProduct.count;
      }
      const {
        [id]: {},
        ...rest
      } = state.items;
      state.items = rest;
    },
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

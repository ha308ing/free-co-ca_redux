import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  isLoading: true,
  total: 0,
  amount: 0,
};

const url = "http://course-api.com/react-useReducer-cart-project";

/*
  https://redux-toolkit.js.org/api/createAsyncThunk
  https://redux-toolkit.js.org/api/createReducer#usage-with-the-builder-callback-notation
  */

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, thunkAPI) => {
    try {
      // _ is a parameter passed to dispatch(fetchCartItems(_))
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal())

      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("There was an error...");
    }
  }
  /*
    async () => {
      const request = await fetch(url);
      const response = await request.json();
      return response;
    }
  */

  /*
    return fetch(url).then(response => response.json()).catch(err=>console.error(err)
   */
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeCartItem: (state, { payload }) => {
      const targetItem = state.cartItems.find(c => c.id === payload);
      state.cartItems = state.cartItems.filter(c => c.id != payload);
      state.total -= targetItem.price * targetItem.amount;
    },
    increaseCartItem: (state, { payload }) => {
      const targetItem = state.cartItems.find(c => c.id === payload);
      targetItem.amount++;
      state.total += +targetItem.price;
    },
    decreaseCartItem: (state, { payload }) => {
      const targetItem = state.cartItems.find(c => c.id === payload);
      if (targetItem.amount > 1) {
        targetItem.amount--;
      } else {
        state.cartItems = state.cartItems.filter(c => c.id !== payload);
      }
      state.total -= targetItem.price;
    },
    clearCart: state => {
      state.cartItems = [];
    },
    setCart: (state, { payload }) => {
      state.cartItems = payload;
    },
    calculateTotals: state => {
      const { amount, total } = state.cartItems.reduce(
        (acc, c) => {
          acc.amount += c.amount;
          acc.total += c.amount * c.price;
          return acc;
        },
        { amount: 0, total: 0 }
      );

      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCartItems.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cartItems = payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        // action is got from thunkAPI.rejectWithValue("There was an error...");
        // console.log(action)
        state.isLoading = false;
      });
  },
});

export const cartActions = cartSlice.actions;
export const {
  clearCart,
  removeCartItem,
  increaseCartItem,
  decreaseCartItem,
  calculateTotals,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const cartSelector = state => state.cart;
export const cartItemsSelector = state => cartSelector(state).cartItems;
export const cartIsLoadingSelector = state => cartSelector(state).isLoading;

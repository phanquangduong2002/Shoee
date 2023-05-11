import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  ordersDetail: [],
  isLoading: false,
  error: false,
  isAddSuccess: false,
  isRemoveSuccess: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrder: (state) => {
      state.isLoading = true;
    },
    getOrderSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },

    addOrdersDetail: (state, action) => {
      state.ordersDetail = action.payload;
    },

    addSuccess: (state, action) => {
      state.isAddSuccess = action.payload;
    },
    removeSuccess: (state, action) => {
      state.isRemoveSuccess = action.payload;
    },
  },
});

export const {
  getOrder,
  getOrderSuccess,
  addOrdersDetail,
  addSuccess,
  removeSuccess,
} = orderSlice.actions;

export default orderSlice.reducer;

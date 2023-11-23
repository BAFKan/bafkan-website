import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstNumber: 0,
  secondNumber: 0,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    firstNumberIncrement(state) {
      state.firstNumber += 1;
    },
    secondNumberIncrement(state) {
      state.secondNumber += 1;
    },
    firstNumberDecrement(state) {
      state.firstNumber -= 1;
    },
    secondNumberDecrement(state) {
      state.secondNumber -= 1;
    },
    allNumberReset(state) {
      state.firstNumber = initialState.firstNumber;
      state.secondNumber = initialState.secondNumber;
    },
  },
});

export const {
  firstNumberIncrement,
  firstNumberDecrement,
  secondNumberIncrement,
  secondNumberDecrement,
  allNumberReset,
} = todoSlice.actions;

// Secara otomatis dari slice yang dibuat juga menyediakan reducernya.
export default todoSlice.reducer;

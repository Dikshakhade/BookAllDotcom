import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  seat: 0,
  seatSelect: [],
  statusbus: [],
};

const seatSelection = createSlice({
  name: "seatSelection",
  initialState,
  reducers: {
    // resetSeat:
    seatSelectionReducer: (state, action) => {
      state.seatSelect.push(action.payload);
      state.statusbus[action.payload] = !state.statusbus[action.payload];
    },
    seatSatus: (state, action) => {
      state.statusbus.push(action.payload);
    },
    cartCounter: (state) => {
      state.seat.filter((s) => s === true || s === 1);
    },
  },
});

export default seatSelection.reducer;
export const { seatSelectionReducer, cartCounter, seatSatus } =
  seatSelection.actions;

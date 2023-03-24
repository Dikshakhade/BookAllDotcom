import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfSeat: 0,
  seatSelect: [],
  statusbus: new Set(),
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
    cartCounter: (state) => {
      for (let i of state.statusbus) {
        if (state.statusbus[i]) {
          state.noOfSeat++;
        } else {
          state.noOfSeat--;
        }
      }
    },
  },
});

export default seatSelection.reducer;
export const { seatSelectionReducer, cartCounter, seatSatus } =
  seatSelection.actions;

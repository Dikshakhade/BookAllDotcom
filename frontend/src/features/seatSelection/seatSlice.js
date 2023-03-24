import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfSeat: 0,
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
      if (state.statusbus[action.payload] === true) {
        state.noOfSeat++;
      } else {
        state.noOfSeat--;
      }
    },
    cartCounter: (state) => {},
  },
});

export default seatSelection.reducer;
export const { seatSelectionReducer, cartCounter, seatSatus } =
  seatSelection.actions;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  noOfSeat: 0,
  seatSelect: [],
  statusSeat: [],
};

const seatSelection = createSlice({
  name: "seatSelection",
  initialState,
  reducers: {
    // resetSeat:
    seatSelectionReducer: (state, action) => {
      state.seatSelect.push(action.payload);
      state.statusSeat[action.payload] = !state.statusSeat[action.payload];
      if (state.statusSeat[action.payload] === true) {
        state.noOfSeat++;
      } else {
        state.noOfSeat--;
      }
    },
    cartCounter: (state) => {},
  },
});

export default seatSelection.reducer;
export const { seatSelectionReducer } = seatSelection.actions;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import seatSelectionReducer from "../features/seatSelection/seatSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    seatSelection: seatSelectionReducer,
  },
});

export default store;

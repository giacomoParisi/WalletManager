import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slicer";

export  const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>



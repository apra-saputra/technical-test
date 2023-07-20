import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./slices/gifs";

const store: any = configureStore({
  reducer: gifReducer,
});

export default store;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ContentState = {
  data: any[];
  loading: boolean;
  error: unknown;
  menu: string;
};

type PayloadType = {
  data: object[];
  menu: string;
};

const initialState: ContentState = {
  data: [],
  loading: false,
  error: null,
  menu: "",
};

const { actions, reducer } = createSlice({
  name: "gifs",
  initialState,
  reducers: {
    initData(state) {
      state.loading = true;
    },
    storeData(state, action: PayloadAction<PayloadType>) {
      state.data = action.payload.data;
      state.loading = initialState.loading;
      state.menu = action.payload.menu;
    },
    catchError(state, action: PayloadAction<unknown>) {
      state.error = action.payload;
      state.loading = initialState.loading;
    },
  },
});

export const { initData, storeData, catchError } = actions;
export default reducer;

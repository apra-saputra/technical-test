import axios from "../../axios";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { initData, storeData, catchError } from "./index";

export const fetchData =
  (params?: string) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch(initData());
    try {
      const url = `search?q=${params ? params : "random"}`;

      const { data } = await axios.get(url);
      dispatch(
        storeData({
          data: data.data,
          menu: params !== "iron man" ? "search" : "iron man",
        })
      );
    } catch (error: any) {
      console.log(error.message);
      dispatch(catchError(error.message));
    }
  };

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../core/services/api";
import type { ApiResponse } from "../../models/apiResponse";
import type { AppDispatch, RootState } from "../store";
import type { PropositionForm } from "../../models/propositionForm";

// SEND proposition
export const sendProposition = createAsyncThunk<
  ApiResponse,
  PropositionForm,
  { rejectValue: ApiResponse; dispatch: AppDispatch; state: RootState }
>("proposition/sendProposition", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await api.post("proposition/send-proposition", data);
    return res.data.response as ApiResponse;
  } catch (error) {
    const apiError = error as ApiResponse;
    return rejectWithValue(apiError);
  }
});

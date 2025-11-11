import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiResponse } from "../../models/apiResponse";
import type { PropositionForm } from "../../models/propositionForm";
import { sendProposition } from "../thunks/propositionThunks";

interface PropositionState {
  propositionForm: PropositionForm | null;
  loading: boolean;
  response: ApiResponse | null;
}

const initialState: PropositionState = {
  propositionForm: null,
  loading: false,
  response: null,
};

const propositionSlice = createSlice({
  name: "proposition",
  initialState,
  reducers: {
    clearProposition: (state) => {
      state.propositionForm = null;
    },
    clearResponse: (state) => {
      state.response = null;
    },
  },
  extraReducers: (builder) => {
    // SEND PROPOSITION
    builder.addCase(sendProposition.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      sendProposition.fulfilled,
      (state, action: PayloadAction<ApiResponse>) => {
        state.loading = false;
        state.response = action.payload;
      }
    );
    builder.addCase(sendProposition.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload ?? null;
    });
  },
});

export const { clearProposition, clearResponse } = propositionSlice.actions;
export default propositionSlice.reducer;

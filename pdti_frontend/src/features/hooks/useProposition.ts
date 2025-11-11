import { useAppDispatch, useAppSelector } from "../redux/hooks";

import type { PropositionForm } from "../models/propositionForm";
import { sendProposition } from "../redux/thunks/propositionThunks";
import { clearResponse } from "../redux/slices/propositionSlice";

export const useProposition = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector((state) => state.proposition.loading);
  const response = useAppSelector((state) => state.proposition.response);

  // Action to send a proposition
  const createProposition = (data: PropositionForm) =>
    dispatch(sendProposition(data));

  // Reset response state if needed
  const resetResponse = () => dispatch(clearResponse());

  return {
    loading,
    response,
    createProposition,
    resetResponse,
  };
};

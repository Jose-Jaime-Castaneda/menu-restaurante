import { create } from "zustand";
import { RecipiesSliceType, createRecipiesSlice } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>((...a) => ({
  ...createRecipiesSlice(...a),
}));
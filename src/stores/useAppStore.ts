import { create } from "zustand";
import { RecipiesSliceType, createRecipiesSlice } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipiesSliceType>()(
  devtools((...a) => ({
    ...createRecipiesSlice(...a),
  }))
);

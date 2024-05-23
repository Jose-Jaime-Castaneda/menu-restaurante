import { create } from "zustand";
import { RecipiesSliceType, createRecipiesSlice } from "./recipeSlice";
import { FavouritesSliceType, createFavouritesSlice } from "./favouritesSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipiesSliceType & FavouritesSliceType>()(
  devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavouritesSlice(...a),
  }))
);

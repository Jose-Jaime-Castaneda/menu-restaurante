import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavouritesSliceType = {
  favourite: Recipe[];
};

export const createFovouritesSlice: StateCreator<FavouritesSliceType> = () => ({
  favourite: [],
});

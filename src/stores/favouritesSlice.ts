import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavouritesSliceType = {
  favourite: Recipe[];
  handleClickFavourite: (drink: Recipe) => void;
};

export const createFavouritesSlice: StateCreator<FavouritesSliceType> = () => ({
  favourite: [],
  handleClickFavourite: (drink) => {
    
  },
});

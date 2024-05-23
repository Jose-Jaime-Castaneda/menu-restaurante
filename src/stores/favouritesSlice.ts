import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavouritesSliceType = {
  favourite: Recipe[];
  handleClickFavourite: (drink: Recipe) => void;
  favouriteExist: (id: Recipe["idDrink"]) => boolean;
};

export const createFavouritesSlice: StateCreator<FavouritesSliceType> = (
  set,
  get
) => ({
  favourite: [],
  handleClickFavourite: (drink) => {
    if (get().favourite.some((fav) => fav.idDrink === drink.idDrink)) {
      set((state) => ({
        favourite: state.favourite.filter(
          (fav) => fav.idDrink !== drink.idDrink
        ),
      }));
    } else {
      set((state) => ({
        favourite: [...state.favourite, drink],
      }));
    }
  },
  favouriteExist: (id) => {
    return get().favourite.some((fav) => fav.idDrink === id);
  },
});

import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
  NotificationSlicetype,
  createNotificationSlice,
} from "./notificationSlice";

export type FavouritesSliceType = {
  favourite: Recipe[];
  handleClickFavourite: (drink: Recipe) => void;
  favouriteExist: (id: Recipe["idDrink"]) => boolean;
};

export const createFavouritesSlice: StateCreator<
  FavouritesSliceType & NotificationSlicetype,
  [],
  [],
  FavouritesSliceType
> = (set, get, api) => ({
  favourite: [],
  handleClickFavourite: (drink) => {
    if (get().favouriteExist(drink.idDrink)) {
      set((state) => ({
        favourite: state.favourite.filter(
          (fav) => fav.idDrink !== drink.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Eliminado de Favoritos",
        error: false,
      });
    } else {
      set((state) => ({
        favourite: [...state.favourite, drink],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: "Agregado a Favoritos",
        error: false,
      });
    }
  },
  favouriteExist: (id) => {
    return get().favourite.some((fav) => fav.idDrink === id);
  },
});

import { create } from "zustand";
import { RecipiesSliceType, createRecipiesSlice } from "./recipeSlice";
import { FavouritesSliceType, createFavouritesSlice } from "./favouritesSlice";
import { devtools } from "zustand/middleware";
import {
  NotificationSlicetype,
  createNotificationSlice,
} from "./notificationSlice";

export const useAppStore = create<
  RecipiesSliceType & FavouritesSliceType & NotificationSlicetype
>()(
  devtools((...a) => ({
    ...createRecipiesSlice(...a),
    ...createFavouritesSlice(...a),
    ...createNotificationSlice(...a),
  }))
);

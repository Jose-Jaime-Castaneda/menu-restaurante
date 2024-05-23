import { StateCreator } from "zustand";
import { FavouritesSliceType } from "./favouritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSlicetype = {
  notification: Notification;
  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSlicetype & FavouritesSliceType,
  [],
  [],
  NotificationSlicetype
> = (set, get) => ({
  notification: {} as Notification,

  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });
    setTimeout(() => {
      get().hideNotification;
    }, 5000);
  },
  hideNotification: () => {
    set({
      notification: {
        text: "",
        error: false,
        show: false,
      },
    });
  },
});

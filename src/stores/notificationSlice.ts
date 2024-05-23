import { StateCreator } from "zustand";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSlicetype = {
  notification: Notification;
};

export const createNotificationSlice: StateCreator<NotificationSlicetype> = (
  set,
  get
) => ({
  notification: {} as Notification,
});

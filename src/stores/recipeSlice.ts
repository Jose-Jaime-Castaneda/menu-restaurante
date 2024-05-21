import { StateCreator } from "zustand";
import { getCategories } from "../services/recipeService";

type Category = {};

export type RecipiesSliceType = {
  categories: Category[];
  fetchCategories: () => Promise<void>;
};

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = () => ({
  categories: [],

  fetchCategories: async () => {
    getCategories();
  },
});

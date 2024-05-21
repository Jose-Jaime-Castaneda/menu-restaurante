import { StateCreator } from "zustand";
import { getCategories, getRecipies } from "../services/recipeService";
import { Categories, SearchFilter } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilters: SearchFilter) => Promise<void>;
};

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipies: async (searchFilters) => {
    getRecipies(searchFilters);
  },
});

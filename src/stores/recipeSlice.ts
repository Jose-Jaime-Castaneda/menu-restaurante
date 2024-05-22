import { StateCreator } from "zustand";
import { getCategories, getRecipies } from "../services/recipeService";
import { Categories, Drink, Drinks, SearchFilter } from "../types";

export type RecipiesSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipies: (searchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipiesSlice: StateCreator<RecipiesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipies: async (searchFilters) => {
    const drinks = await getRecipies(searchFilters);
    //console.log(drinks);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {},
});

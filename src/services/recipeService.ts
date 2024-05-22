import axios from "axios";
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
} from "../schema/recipies-schema";
import { Drink, SearchFilter } from "../types";

export async function getCategories() {
  const { data } = await axios(
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  );

  const result = CategoriesAPIResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipies(filters: SearchFilter) {
  const { data } = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
  );

  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipeById(id: Drink["idDrink"]) {
  const { data } = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  const result = RecipeAPIResponseSchema.safeParse(data.drinks[0]);
  if (result.success) {
    return result.data;
  }
}

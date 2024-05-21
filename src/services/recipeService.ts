import axios from "axios";
import { CategoriesAPIResponseSchema } from "../schema/recipies-schema";
import { SearchFilter } from "../types";

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
  console.log("hola");
}

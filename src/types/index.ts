import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  SearchFilterSchema,
} from "../schema/recipies-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
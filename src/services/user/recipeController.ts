
import { Request, Response } from 'express';
import { createRecipeInDB, deleteRecipeInDB, getAllItemsFromDB, getAllRecipesFromDB, getRecipeFromDB, updateRecipeInDB } from './recipeModel';



export const createRecipe = async (recipePayload: any) => {
  return await createRecipeInDB(recipePayload)
};


export const getRecipe = async (recipePayload: any) => {
  return await getRecipeFromDB(recipePayload)
};

export const updateRecipe = async (id: any, recipePayload: any) => {
  return await updateRecipeInDB(id, recipePayload)
};
export const deleteRecipe = async (id: any) => {
  return await deleteRecipeInDB(id)
};
export const getAllRecipes = async () => {
  return await getAllRecipesFromDB()
};
export const getAllItems = async (query:any) => {
  return await getAllItemsFromDB(query)
};



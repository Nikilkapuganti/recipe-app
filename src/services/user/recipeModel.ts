import { ObjectId } from "mongodb";
import { connectionObj } from "../../config/db";
import { json } from "express";

export const createRecipeInDB = async (payload: any) => {
  return await connectionObj.db(`recipes-book`).collection('recipes')
    .insertMany(payload)
};


export const getRecipeFromDB = async (id: any) => {
  return await connectionObj.db(`recipes-book`).collection('recipes').find({ "_id": new ObjectId(id) }).toArray()
}

export const updateRecipeInDB = async (id: any, updatePayload: any) => {
  return await connectionObj.db(`recipes-book`).collection('recipes').findOneAndUpdate(
    { "_id": new ObjectId(id) },
    { $set: updatePayload }
  )

}

export const deleteRecipeInDB = async (id: any) => {
  return await connectionObj.db(`recipes-book`).collection('recipes').
  deleteOne({ "_id": new ObjectId(id) });

}
export const getAllRecipesFromDB = async () => {
  return await connectionObj.db(`recipes-book`).collection('recipes').find({}).toArray()
}
export const getAllItemsFromDB = async (query:any) => {

  let price=query
  if (!price || !price.gte || !price.lte) {
    return  'Both gte and lte parameters are required.'
  }

  const minPrice = parseFloat(price.gte);
  const maxPrice = parseFloat(price.lte);

  if (isNaN(minPrice) || isNaN(maxPrice)) {
  return   'Invalid numeric values for gte or lte parameters.' 
  }


  return await connectionObj.db(`recipes-book`).collection('recipes').find({ price: { $gte: minPrice, $lte: maxPrice } }).toArray()
}
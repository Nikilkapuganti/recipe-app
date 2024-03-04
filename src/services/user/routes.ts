import { Request, Response, NextFunction } from "express";
import { createRecipe, deleteRecipe, getAllItems, getAllRecipes, getRecipe, updateRecipe } from "./recipeController";


export default [
    {
        path: '/create/recipe',
        method: 'post',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await createRecipe(req.body);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/recipe/:recipeId/get',
        method: 'get',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await getRecipe(req.params.recipeId);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/recipe/:recipeId/update',
        method: 'post',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await updateRecipe(req.params.recipeId, req.body);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/recipe/:recipeId/delete',
        method: 'delete',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await deleteRecipe(req.params.recipeId);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/recipes/getall',
        method: 'get',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await getAllRecipes();
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
    {
        path: '/items',
        method: 'get',
        handler: [
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    let result = await getAllItems(req.query);
                    res.status(200).send(result);
                } catch (e) {
                    next(e);
                }
            },
        ],
    },
]
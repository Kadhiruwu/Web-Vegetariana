import { create } from 'zustand';
import { createRecipesSlice, RecipesSliceType } from './recipeSlice';

export const useAppStore = create<RecipesSliceType>((set, get, api) => ({
  ...createRecipesSlice(set, get, api), // Pasamos correctamente los 3 parámetros
}));

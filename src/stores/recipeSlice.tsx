import { StateCreator } from 'zustand';

// Define el tipo para el estado del slice
export type RecipesSliceType = {
  modal: boolean;
  closeModal: () => void;
  selectRecipe: () => void
};

// Función para crear el slice con Zustand, acepta set, get y api
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  modal: true,
  closeModal: () => {
    set({ modal: true });
  },
  selectRecipe: () => {
    console.log('hola')
    set({
        modal: true

    })
}
});

import { useState, useEffect } from 'react';
import { recipes, Recipe } from '../types';

export default function Recetas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup para cuando el componente se desmonta
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  const openModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Si el clic ocurre fuera del modal, cerrarlo
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <div id="recetas" className="px-10 py-10 h-screen">
        <h2 className="text-black font-bold text-3xl">Recetas Saludables</h2>
        <p className="text-black text-lg mb-5">Descubre nuestras recetas veganas y disfruta de un estilo de vida más saludable.</p>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 px-10 items-center justify-center text-center'>
        {recipes.map((recipe, index) => (
          <div key={index} className='flex flex-col justify-center items-center text-center gap-2'>
            <img
              src={recipe.img}
              alt={recipe.title}
              className='max-w-96 rounded-2xl hover:scale-105 hover:rotate-2 transition-transform'
              onClick={() => openModal(recipe)}
            />
            <p className='font-bold'>{recipe.title}</p>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        onClick={handleBackgroundClick}>
          <div className="bg-white p-6 rounded-lg max-w-lg text-center flex flex-col items-center">
            <h3 className="font-bold text-xl mb-4">{selectedRecipe?.title}</h3>
            <img src={selectedRecipe?.img} alt={selectedRecipe?.title} className="rounded-lg mb-4 max-w-sm" />
            <p className='font-bold text-2xl my-3'>Ingredientes:</p>
            <li className='text-sm'>{selectedRecipe?.ingredients1}</li>
            <li className='text-sm'>{selectedRecipe?.ingredients2}</li>
            <li className='text-sm'>{selectedRecipe?.ingredients3}</li>
            <li className='text-sm'>{selectedRecipe?.ingredients4}</li>
            <li className='text-sm'>{selectedRecipe?.ingredients5}</li>
            <li className='text-sm'>{selectedRecipe?.ingredients6}</li>
            <p className='font-bold text-2xl mt-3'>Preparación</p>
            <p className='text-sm mb-4'>{selectedRecipe?.description}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}  
      </div>
      
    </>
  );
}

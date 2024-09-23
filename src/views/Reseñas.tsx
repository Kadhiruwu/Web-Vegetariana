import fondo2 from '../img/fondo2.jpg';
import persona from '../img/persona.jpg';

export default function Reseñas() {
  return (
    <>
    <div id='reseñas' className="bg-custom-fondo bg-cover bg-center h-screen font-roboto" style={{backgroundImage: `url(${fondo2})`,
      }}>
    
      <div className="h-screen px-10 py-10">
        <div className='flex flex-col gap-40'>
          <div>
          <h2 className="text-black font-bold text-3xl">Reseñas de nuestros Clientes</h2>
            <p className="text-black text-lg">Lo que opinan los clientes de nuestra empresa, en nuestra gran trayectoria...</p>
          </div>
          <div className='flex gap-10'>
          <div className='bg-green-900 max-w-sm p-4 rounded-2xl flex flex-col gap-5'>
          <div>
          <p className='text-yellow-500 text-9xl text-center font-bold'>4.8</p>
            <div className='flex text-yellow-500 text-center justify-center text-3xl'>
              <p><i className="fa-solid fa-star"></i></p>
              <p><i className="fa-solid fa-star"></i></p>
              <p><i className="fa-solid fa-star"></i></p>
              <p><i className="fa-solid fa-star"></i></p>
              <p><i className="fa-solid fa-star"></i></p>
          </div>

          </div>
          <p className='text-center text-white'>Somos la empresa mas recomendada y mejor calificada en todo el pais</p>
          <p className='text-center text-yellow-500'>FoodHealthy</p>
        </div>
        
        <div className='flex flex-col gap-4'>
          <div className='flex gap-5'>
            <img src={persona} alt="persona" className='w-20 h-20 rounded-full object-cover' />
            <div>
              <p className='text-yellow-800 font-bold text-2xl'>Julio Vargas Sosa</p>
              <p className='text-amber-800 font-bold'>Cliente Frecuente</p>
            </div>

          </div>
          <div className='max-w-xl font-bold'>
            <p>"Este sitio de comida vegana ha transformado mi manera de comer. Las recetas son deliciosas, saludables y muy fáciles de seguir. Me encanta la variedad de opciones, todas con ingredientes naturales. Si buscas mejorar tu alimentación sin renunciar al sabor, ¡te lo recomiendo totalmente!"</p>
          </div>

        </div>
        </div>
        </div>
 
      </div>
      
      </div>
    </>
  )
}

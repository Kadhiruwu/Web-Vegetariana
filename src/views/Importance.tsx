import importancia from '../img/importancia.jpg';

export default function Importance() {
  return (
    <>
      <div id='importance'>
        <div className="bg-custom-fondo bg-cover bg-center h-screen font-roboto grid grid-cols-1 lg:grid-cols-2">
          <img src={importancia} alt="importanciafondo" className='h-screen bg-cover bg-center bg-no-repeat' />
          <div className='bg-amber-700 p-4 flex flex-col py-32 gap-28'>
            <h1 className='text-white text-3xl font-bold '>Importancia de la vida Vegetariana</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-white'>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-leaf text-xl"></i>
                <p className='font-bold'>
                  Mejora la salud: <span className='font-normal'>Seguir una dieta vegetariana bien equilibrada puede reducir el riesgo de enfermedades crónicas como enfermedades cardíacas.</span>
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-seedling text-xl"></i>
                <p className='font-bold'>
                  Protección del medio ambiente: <span className='font-normal'>La producción de carne genera una huella ecológica significativa, incluyendo altas emisiones de gases de efecto invernadero y el uso excesivo de agua.</span>
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-apple-whole text-xl"></i>
                <p className='font-bold'>
                  Bienestar animal: <span className='font-normal'>Adoptar un estilo de vida vegetariano contribuye a la protección de los animales.</span>
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <i className="fa-solid fa-carrot text-xl"></i>
                <p className='font-bold'>
                  Ahorro económico: <span className='font-normal'>Las dietas vegetarianas suelen ser más económicas, ya que los alimentos como los granos.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


import fondo from '../img/fondoprincipal.jpeg';
import { useNavigate } from "react-router-dom";
import Recetas from '../views/Recetas';
import Importance from '../views/Importance';
import OurProducts from '../views/OurProducts';
import Reseñas from '../views/Reseñas';
import ProductsTop from '../views/ProductsTop';
export default function Layout() {

  const navigate = useNavigate()
  return (
    <>
        <div className="bg-custom-fondo bg-cover bg-center h-screen font-roboto" style={{backgroundImage: `url(${fondo})`,
      }}>
        <div className="flex flex-col justify-between gap-64 ">
        <div className="flex items-center justify-between">
            <h1 className="text-white text-3xl font-bold py-10 xl:px-20 md:px-10">FoodHealthy</h1>
                <nav className="text-white font-bold text-xl py-10 px-20 flex gap-5">
                  <a href="#ourProducts" onClick={() => navigate(`/ourProducts`)} className="hover:text-green-300">Products</a>
                  <a href="#recetas" onClick={() => navigate(`/recetas`)} className="hover:text-green-300">Recetas</a>
                  <a href="#productsTop" onClick={() => navigate(`/productsTop`)} className="hover:text-green-300">TopProductos</a>
                  <a href="#reseñas" onClick={() => navigate(`/reseñas`)} className="hover:text-green-300">Reseñas</a>
                  <a href="#importance" onClick={() => navigate(`/importance`)} className="hover:text-green-300">Importancia</a>
                  <button className="flex items-center text-white">
                  <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                </nav>
      
        </div>
        
        <div className="px-10 ">
          <h2 className="text-white font-bold text-4xl max-w-lg">La mejor Web para tus Comidas Saludables en todo el Perú</h2>
          <p className="text-white text-lg">Alimenta tu cuerpo, cuida el planeta, con cada bocado vegano.</p>
        </div>

        </div>


      </div>
        <OurProducts/>
        <Recetas/>
        <Importance/>
        <ProductsTop/>
        <Reseñas/>
    </>
  )
}

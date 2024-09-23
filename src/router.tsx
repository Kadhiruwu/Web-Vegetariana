import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products from "./views/Products";
import Recetas from "./views/Recetas";
import OurProducts from "./views/OurProducts";
import Importance from "./views/Importance";
import Home from "./views/Home";
import ProductsTop from "./views/ProductsTop";
import Reseñas from "./views/Reseñas";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <Products/>
            },
            {
                path: 'home',
                element: <Home/>
            },
            {
                path: 'ourProducts',
                element: <OurProducts/>
            },
            {
                path: 'importance',
                element: <Importance/>
            },
            {
                path: 'recetas',
                element: <Recetas/>
            },
            {
                path: 'productsTop',
                element: <ProductsTop/>
            },
            {
                path: 'reseñas',
                element: <Reseñas/>
            }
        ]
    }
])
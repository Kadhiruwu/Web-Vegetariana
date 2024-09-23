import receta1 from '../img/receta1.webp';
import receta2 from '../img/receta2.webp';
import receta3 from '../img/receta3.webp';
import receta4 from '../img/receta4.webp';
import receta5 from '../img/receta5.webp';
import receta6 from '../img/receta6.webp';



export type Recipe = {
  img: string;
  title: string;
  ingredients1: string 
  ingredients2: string 
  ingredients3: string 
  ingredients4: string 
  ingredients5: string 
  ingredients6: string 
  description: string
};

export const recipes: Recipe[] = [
  {
    img: receta1,
    title: "Ensalada de endivias con quinoa y aguacate",
    ingredients1: "3 cogollos de endivias",
    ingredients2: "200 g. quinoa (ya cocinada)",
    ingredients3: "1 aguacate",
    ingredients4: "100 g. queso feta",
    ingredients5: "Aceite de oliva virgen extra",
    ingredients6: "Vinagre de Jerez",
    description: "Cortamos el cogollo de las endivias, por la parte del tallo, cortando sobre 1 centímetro. Separamos las hojas, las limpiamos con un trapo húmedo, y luego las colocamos en el plato de forma cóncava."
  },
  {
    img: receta2,
    title: "Ensalada de endivias con queso azul y pera",
    ingredients1: "3 cogollos de endivias",
    ingredients2: "100 g. queso roquefort",
    ingredients3: "1 pera",
    ingredients4: "50 g. nueces peladas",
    ingredients5: "Aceite de oliva virgen extra",
    ingredients6: "1 limón",
    description: "Cortamos una pera, dependiendo del tamaño, en cuadraditos pequeños y la repartimos sobre las endivias, así como un puñado de nueces peladas y troceadas, aliñamos: aceite de oliva virgen extra más zumo, mezclamos y añadimos un poco de ralladura de limón."
  },
  {
    img: receta3,
    title: "Letscho. Riquísimo estofado de verduras húngaro",
    ingredients1: "Aceite de oliva virgen extra",
    ingredients2: "1 cebolla dulce",
    ingredients3: "1 pimiento rojo",
    ingredients4: "Medio chile rojo fresco",
    ingredients5: "500 g. de tomates en conserva al natural",
    ingredients6: "1 pimiento amarillo",
    description: "En una sartén echamos un chorrito de aceite de oliva virgen extra hasta cubrir el fondo y cuando esté caliente echamos la cebolla cortada con una pizca de sal. Cuando empiece a dorarse la cebolla, añadimos los pimientos y el chile y los cocinamos un par de minutos."
  },
  {
    img: receta4,
    title: "Ensalada de legumbres y aguacate",
    ingredients1: "1 tomate de ensalada mediano",
    ingredients2: "1 aguacate",
    ingredients3: "150 g. de lentejas cocidas",
    ingredients4: "20 g. de pipas de calabaza",
    ingredients5: "100 g. de quinoa cocida",
    ingredients6: "Aceite de oliva virgen extra",
    description: "En una sartén con algo de aceite salteamos el choclo cocido o el maíz dulce hasta que esté doradito. Reservamos.Troceamos el aguacate y cortamos el tomate, añadimos los dos ingredientes al bol con las legumbres y los canónigos."
  },
  {
    img: receta5,
    title: "Berenjenas rellenas de verduras",
    ingredients1: "4 berenjenas grandes",
    ingredients2: "1 tomate",
    ingredients3: "1 calabacín pequeño",
    ingredients4: "4 pimientos del piquillo",
    ingredients5: "200 g. queso para gratinar",
    ingredients6: "Albahaca fresca",
    description: "Cortamos las berenjenas por la mitad y hacemos unas cortes en forma de rejilla en cada mitad, dejando un margen, para que queden con consistencia. Colocamos en la bandeja del horno, sobre papel aluminio, salamos y rociamos con un poco de aceite de oliva virgen extra. Horneamos 20/25 minutos, a 180ºC."
  },
  {
    img: receta6,
    title: "Huevos rebozados estilo asiático",
    ingredients1: "2 huevos.",
    ingredients2: "Aceite de girasol en abundancia, para freír",
    ingredients3: "Sal",
    ingredients4: "Pimienta negra molida",
    ingredients5: "100 g. de harina de trigo de todo uso",
    ingredients6: "125 g. de agua muy fría",
    description: "Hacemos un hueco en el centro y agregamos, poco a poco, la mezcla de agua con levadura mientras removemos para que se vaya mezclando con la harina. Tenemos que obtener una masa sin grumos y de consistencia cremosa, como de natillas. Cuando llegue el momento llenamos un cacito con abundante aceite y lo ponemos al fuego. Lo mantenemos caliente."
  }
];
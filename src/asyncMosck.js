const cervezas = [
    {
        id: '1',
        name: 'APA',
        price: 1500,
        category: 'ale',
        img: "../apa.png",
        stock: 250,
        description: 'La American Pale Ale (APA) es un estilo de cerveza que se originó en los Estados Unidos y ha ganado popularidad en todo el mundo. Esta cerveza es conocida por su equilibrio entre maltosidad y lúpulo, lo que la hace tener un sabor y aroma a lúpulo distintivo pero no abrumador.'
    },
    {
        id: '2',
        name: 'Weizenbier',
        price: 1250,
        category: 'lager',
        img: '../weizenbier.png',
        stock: 150,
        description: 'La Weizenbier, también conocida como Hefeweizen, es un estilo de cerveza de trigo de origen alemán que se caracteriza por su sabor agradablemente afrutado, cuerpo ligero y aroma a levadura de trigo.'
    },
    {
        id: '3',
        name: 'Fragaria',
        price: 1500,
        category: 'lager',
        img: '../fragaria.png',
        stock: 125,
        description: 'La cerveza Fragaria es una variedad especial que incorpora fresas como ingrediente principal durante el proceso de elaboración. Esta cerveza suele tener un sabor refrescante y afrutado, con notas distintivas de fresa que se suman al perfil de sabor general.'
    },
    {
        id: '4',
        name: 'Amber',
        price: 1250,
        category: 'lager',
        img: '../amber.png',
        stock: 150,
        description: 'La cerveza Amber, es un estilo de cerveza que se caracteriza por su color ambarino, que proviene de las maltas tostadas utilizadas durante el proceso de elaboración. Tiene un sabor equilibrado entre la malta y el lúpulo, con notas de caramelo, tostado y a veces frutales. Suele tener un cuerpo medio y un final suave y ligeramente amargo. '
    },
    {
        id: '5',
        name: 'Cream Stout',
        price: 1250,
        category: 'ale',
        img: '../cream_stout.png',
        stock: 100,
        description: 'La Cream Stout es un estilo de cerveza que combina las características de una Stout con una textura más suave y cremosa. Tiene un color oscuro, generalmente negro o marrón profundo, con sabores a malta tostada, café, chocolate y caramelo.'
    },
    {
        id: '6',
        name: 'Cuatro Tres',
        price: 1000,
        category: 'ale',
        img: '../cuatro_tres.png',
        stock: 100,
        description: 'Cuatro Tres es estilo DOPPELBOCK, es una cerveza de fermentación Ale, compleja tanto en aroma como en sabor, donde encontraremos caramelos, frutas secas, leves chocolates. De cuerpo alto y amargor bajo.'
    }
]

export const getCervezas = new Promise((res) => {
    setTimeout(() => {
        res(cervezas);
    }, 2000);
})

export const getCerveza = (id) => {
    return cervezas.find(cerv => cerv.id === id);
}

export function getCervezasPorCategoria(categoria) {
    // Filtrar las cervezas según la categoría proporcionada
    return cervezas.filter(cerveza => cerveza.category === categoria);
  }
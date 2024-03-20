import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getCervezas} from '../../asyncMock'


export default function ItemListContainer() {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        getCervezas
            .then(cervezas => {
                // Si categoryId está definido, filtramos las cervezas por categoría
                const productosFiltrados = categoryId ? cervezas.filter(cerveza => cerveza.category === categoryId) : cervezas;
                setProductos(productosFiltrados);
            })
            .catch(error => console.error('Error al obtener los productos:', error));
            
    }, [categoryId])


    return (
        <main>
            {
                <ItemList productos={productos} />
            }
        </main>
    )
}
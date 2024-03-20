import './CategoriesComponent.css'
import { Link } from 'react-router-dom';

export default function CategoriesComponent() {

    return (
        <>
            <div className='fondo-categoria'>

                <div className='tituloh2'>
                    <h2>Seleccione una Categoria:</h2>
                </div>

                <div className='btnContainer'>
                    <button className='btn categoriaBtn'><Link className='linkBtn' to={'/categoria/lager'}>Lager</Link></button>
                    <button className='btn categoriaBtn'><Link className='linkBtn' to={'/categoria/ale'}>Ale</Link></button>
                </div>

            </div>
        </>
    );
}
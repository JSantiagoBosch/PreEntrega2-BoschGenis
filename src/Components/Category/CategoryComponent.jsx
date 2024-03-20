import './CategoryComponent.css'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCervezasPorCategoria } from "../../asyncMosck";


export default function CategoryComponent() {

    const { categoria } = useParams();

    const [cerveza, setCerveza] = useState([]);

    useEffect(() => {
        setCerveza(getCervezasPorCategoria(categoria));
    }, [categoria]);

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/cerveza/${id}`)
    }

    return (
        <>
            <div className='contenedorCat'>

                <div className="text-center tituloh3">
                    <h3>Cervezas {categoria}</h3>
                </div>

                <section className="container pbSec">

                    <div className="row">
                        {
                            cerveza.map(cerveza => (
                                <div className="col-xl-3 col-md-6 col-sm-12 mb-5" key={cerveza.id}>
                                    <div className="tarjeta">
                                        <img src={cerveza.img} alt={cerveza.name} />
                                        <h3 className="text-center"> {cerveza.name} </h3>
                                        <p>Precio: $ {cerveza.price}</p>
                                        <button className="btn" onClick={() => handleClick(cerveza.id)}> Ver Detalles </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </section>
            </div>
        </>
    );
}
import './ItemListContainer.css'
import { useNavigate } from "react-router-dom";
import { getCervezas } from "../../asyncMosck";
import { useEffect, useState } from "react";

export default function ItemListContainer() {


    const [cervezas, setCervezas] = useState([]);

    // Llamamos a getCervezas, cuando llega toda la info le damos el nombre data y  se lo pasamos a setCervezas
    useEffect(() => {
        getCervezas
            .then(data => setCervezas(data))
    }, [])

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/cerveza/${id}`)
    }

    return (
        <>
            <main>
                <div className="fondo-cervezas">
                    <div className="tituloCentral text-center">
                        <span className="sub-titulo">Catálogo</span>
                        <h3 className="mt-3">Cervezas</h3>
                    </div>
                </div>

                <section className="container pbSec">

                    <div className="row">
                        {
                            cervezas.map(cerveza => (
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
            </main>
        </>
    );
}
import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCerveza } from "../../asyncMosck";


export default function ItemDetailContainer() {

    const { id } = useParams();

    const [cerveza, setCerveza] = useState({});

    useEffect(() => {
        setCerveza(getCerveza(id));
    }, [id]);


    return (
        <>
        <div className='cervezaDescripContainer'>
            <div className="container cervezaStyle">
                <h3 className="text-center"> {cerveza.name} </h3>
                <img className='cervezaImg' src={cerveza.img} alt={cerveza.name} />
                <p>Categoria: {cerveza.category}</p>
                <p>{cerveza.description}</p>
                <p>Stock: {cerveza.stock}</p>
                <p>Precio: $ {cerveza.price}</p>
                <button className='customBtn' onClick={() => handleClick(cerveza.id)}> Comprar </button>
            </div>
        </div>
            
        </>
    );
}
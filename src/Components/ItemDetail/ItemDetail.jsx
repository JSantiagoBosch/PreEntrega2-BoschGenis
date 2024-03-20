import './ItemDetail.css'

export default function ItemDetail({ item }) {

    console.log(item);
    
    return (
        <>
            <div className='cervezaDescripContainer'>
            <div className="container cervezaStyle">
                <h3 className="text-center"> {item.name} </h3>
                <img className='cervezaImg' src={item.img} alt={item.name} />
                <p>Categoria: {item.category}</p>
                <p>{item.description}</p>
                <p>Stock: {item.stock}</p>
                <p>Precio: $ {item.price}</p>
                <button className='customBtn'> Comprar </button>
            </div>
        </div>
        </>

    )
}
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getItem } from "../../asyncMock"


export default function ItemDetailContainer() {
    
    const { itemId } = useParams();

    const [item, setItem] = useState({});


    useEffect(() => {
        setItem(getItem(itemId));
    }, [itemId])

    return (
        <main>
            {
                <ItemDetail item={item} />
            }
        </main>
    )
}
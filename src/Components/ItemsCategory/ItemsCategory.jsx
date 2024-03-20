import { useParams } from "react-router-dom";


export default function ItemsCategory(){
    
    const {categoria} = useParams();
    
    
    return(
        <>
            <div>Categoria {categoria}</div>
        </>
    );
}
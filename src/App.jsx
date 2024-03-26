import Header from "./Components/Header/Header";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Contacto from "./Components/Contacto/Contacto";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  return (

    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  )
}

export default App
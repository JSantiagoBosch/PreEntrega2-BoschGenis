import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from './Components/Navbar/NavbarComponent'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import CategoriesComponent from './Components/Categories/CategoriesComponent'
import CategoryComponent from './Components/Category/CategoryComponent'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import TiendaComponent from './Components/Tienda/TiendaComponent'
import ContactoComponent from './Components/Contacto/ContactoComponent'
import 'bootstrap/dist/css/bootstrap.min.css'
import FooterComponent from './Components/Footer/FooterComponent'
import HomeComponent from './Components/Home/HomeComponent'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route exact path='/' element={<HomeComponent />} />
        <Route exact path='/cervezas' element={<ItemListContainer />} />
        <Route exact path='/cerveza/:id' element={<ItemDetailContainer />} />
        <Route exact path='/categoria' element={<CategoriesComponent />} />
        <Route exact path='/categoria/:categoria' element={<CategoryComponent />} />
        <Route exact path='/tienda' element={<TiendaComponent />} />
        <Route exact path='/contacto' element={<ContactoComponent />} />
      </Routes>
      <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

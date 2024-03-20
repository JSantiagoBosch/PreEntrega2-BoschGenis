import Menu from '../Menu/Menu'
import './Header.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Header = () => {

    return (
        <header className="navbar navbar-expand-lg encabezado">
            <div className="container-fluid">

                <Link className="colorJubilus" to={'/'}>
                    <img className="tamLogo" src="jubilus.ico" alt="icono" />
                    JuBILuS
                </Link>

                <Menu />
                <CartWidget />
            </div>
        </header>
    )
}
import './NavbarComponent.css'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {


    return (
        <nav className="navbar-collapse">

            <Link className="estilosBtn li-link" to="/">Inicio</Link>
            <Link className="estilosBtn li-link" to="/productos/lager">Lager</Link>
            <Link className="estilosBtn li-link" to="/productos/ale">Ale</Link>
            <Link className="estilosBtn li-link" to="/contacto">Contacto</Link>
            
        </nav>
    )
}

export default NavbarComponent
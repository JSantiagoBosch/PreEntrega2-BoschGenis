import { Link } from 'react-router-dom'
import './NavbarComponent.css'

export default function NavbarComponent() {



    return (
        <>
            <header className="navbar navbar-expand-lg encabezado">
                <div className="container-fluid">
                    <Link className="colorJubilus" to={'/'}>
                        <img className="tamLogo" src="jubilus.ico" alt="icono" />
                        JuBILuS
                    </Link>

                    <nav className="navbar-collapse">

                        <ul className="navbar-nav mx-auto">
                            <li>
                                <button className='estilosBtn'><Link className="li-link" to={'/'}>Home</Link></button>
                            </li>
                            <li>
                                <button className='estilosBtn'><Link className="li-link" to={'/cervezas'}>Cervezas</Link></button>
                            </li>
                            <li>
                                <button className='estilosBtn'><Link className="li-link" to={'/tienda'}>Tienda</Link></button>
                            </li>
                            <li>
                                <button className='estilosBtn'><Link className="li-link" to={'/categoria'}> Categoria </Link></button>
                            </li>
                            <li>
                                <button className='estilosBtn'><Link className="li-link" to={'/contacto'}> Contacto </Link></button>
                            </li>
                        </ul>
                        
                    </nav>

                </div>
            </header>
        </>
    )
} 
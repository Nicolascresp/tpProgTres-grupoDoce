import "./navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (

        <nav className="mainnav">
            <ul className="nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Favoritos">FAVORITOS</Link></li>
                <li><Link to="/">VER MAS</Link></li>
            </ul>

            <form action="" method="GET" className="form">
                <input type="text" name="" placeholder="Buscar Peliculas" />
                <button type="submit">Buscar</button>
            </form>

        </nav>
    )
}

export default Navbar
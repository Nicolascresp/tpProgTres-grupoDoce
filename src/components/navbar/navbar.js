import "./navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return(
<nav>
        <ul className="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoritos">favoritos</Link></li>
        </ul>
        <ul class="user">
            <li>Nombre usuario <img src="./img/user.jpg" alt="" /></li>
        </ul>
    </nav>
    )
}

export default Navbar
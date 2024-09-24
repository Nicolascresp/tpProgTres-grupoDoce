import "./navbar.css"
import { Link } from "react-router-dom"
import React,{ Component } from 'react';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    render(){
    return (

        <nav className="mainnav">
            <ul className="nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Favoritos">FAVORITOS</Link></li>
                <li><Link to="/Populares">POPULARES</Link></li>
                <li><Link to="/Cartelera">CARTELERA</Link></li>
                
            </ul>
        </nav>
    )
}}

export default Navbar
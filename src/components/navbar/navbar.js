import "./navbar.css"
import { Link } from "react-router-dom"
import { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    handleInputChange(e) {
        this.setState({
            query: e.target.value
        });
    }

    handleInputSubmit(e) {
        this.props.history.push('/search', { query: this.state.query });
    }

    render(){
    return (

        <nav className="mainnav">
            <ul className="nav">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/Favoritos">FAVORITOS</Link></li>
                <li><Link to="/">VER MAS</Link></li>
            </ul>

            <form className="form" onSubmit={(e) => this.handleInputSubmit(e)}>
                    <input type="text" name="query" placeholder="Buscar Peliculas" value={this.state.query}
                        onChange={(e) => this.handleInputChange(e)} 
                    />
                    <button type="submit">Buscar</button>
                </form>

        </nav>
    )
}}

export default Navbar
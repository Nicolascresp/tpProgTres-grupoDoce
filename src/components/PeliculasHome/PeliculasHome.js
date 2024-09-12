import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class PeliculasHome extends Component {

    constructor(props) {
        super(props);
       
      }

    render() {
        return (

        <section>
            <article>
                <h1>{this.props.title}</h1>
                <img src={this.props.img} alt={this.props.title} />
                <Link to="/descripcion">Ver Descripción</Link>
                <p>{this.props.description}</p>

            </article>
        </section>
       
    )
    }
}

export default PeliculasHome;
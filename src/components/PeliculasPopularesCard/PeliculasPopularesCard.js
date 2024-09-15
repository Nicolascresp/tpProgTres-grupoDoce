import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./PeliculasPopularesCard.css"

class PeliculasPopularesCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: this.props.description,
      VerDesc: false
    }

  }

  verdescripcion() {
    this.setState({
      VerDesc: !this.state.VerDesc
    });
  }

  render() {
    const { title, img, id, section } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${img}`;

    return (
      <section className='peliculas-pop-card'>
        <article>
          <Link to={`/Detalle/${id}/${section}`} className='titulo'><h1>{title}</h1></Link>
          <img src={imageUrl} alt={title} />

          <button onClick={() => this.verdescripcion()} className="buttonDesc">
            {this.state.VerDesc ? "Ocultar Descripción" : "Descripción"}
          </button>

          <p className={this.state.VerDesc ? "showDescription" : "hideDescription"} >
            {this.props.description}
          </p>

          <Link to={`/Detalle/${id}/${section}`} className="verdesc">Ver Detalle</Link>


        </article>
      </section>
    );
  }
}

export default PeliculasPopularesCard;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./PeliculasPopularesCard.css"

class PeliculasPopularesCard extends Component {
  render() {
    const { title, img, id, description, section } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${img}`;

    return (
      <section className='peliculas-pop-card'>
        <article>
          
          <Link to={`/Detalle/${id}/${section}`} className='titulo'><h1 >{title}</h1></Link>
          <img src={imageUrl} alt={title} />
          <p className = "verdesc">Descripción:</p>
          <p>{description}</p>
          <Link to={`/Detalle/${id}/${section}`} className = "verdesc" >Ver Detalle</Link>

        </article>
      </section>
    );
  }
}

export default PeliculasPopularesCard;






















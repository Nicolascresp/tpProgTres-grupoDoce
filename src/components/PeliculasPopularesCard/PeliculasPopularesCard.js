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
          <h1 className='titulo'>{title}</h1>
          <img src={imageUrl} alt={title} />
          <Link  className = "verdesc" > Descripción</Link>
          <p>{description}</p>
          <Link to={`/Detalle/${id}/${section}`} className = "verdesc" >Ver Detalle</Link>

        </article>
      </section>
    );
  }
}

export default PeliculasPopularesCard;






















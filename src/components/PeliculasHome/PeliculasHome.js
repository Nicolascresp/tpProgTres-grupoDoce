import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PeliculasHome extends Component {
  render() {
    const { title, img, id, description, section } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${img}`;

    return (
      <section>
        <article>
          <h1>{title}</h1>
          <img src={imageUrl} alt={title} />
          <Link to={`/Detalle/${id}/${section}`}>Ver Descripción</Link>
          <p>{description}</p>
        </article>
      </section>
    );
  }
}

export default PeliculasHome;
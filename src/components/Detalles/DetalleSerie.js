import React, { Component } from 'react';
import "./DetalleSerie.css"

class DetalleSerie extends Component {
  render() {
    const { details, handleAddToFavorites } = this.props;

    return (
      <div>
        <h2>{details.name}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.name}
        />
        <p>Calificación: {details.vote_average}</p>
        <p>Fecha de estreno: {details.first_air_date}</p>
        <p>Sinopsis: {details.overview}</p>
        <p>Géneros: {details.genres.map((genre) => genre.name).join(', ')}</p>
        <button onClick={handleAddToFavorites}>
          Agregar a Favoritos
        </button>
      </div>
    );
  }
}

export default DetalleSerie;
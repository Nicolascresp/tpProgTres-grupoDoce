import React, { Component } from 'react';
import "./DetalleSerie.css";

class DetalleSerie extends Component {
  render() {
    const { details, handleAddToFavorites } = this.props;

    return (
      <div className="detalle-container">
        <h2>{details.name}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.name}
        />
        <p><strong>Calificación:</strong> {details.vote_average}</p>
        <p><strong>Fecha de estreno:</strong> {details.first_air_date}</p>
        <p><strong>Sinopsis:</strong> {details.overview}</p>
        <p><strong>Géneros:</strong> {details.genres.map((genre) => genre.name).join(', ')}</p>
        <button onClick={handleAddToFavorites}>
          Agregar a Favoritos
        </button>
      </div>
    );
  }
}

export default DetalleSerie;
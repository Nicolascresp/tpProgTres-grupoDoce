import React, { Component } from 'react';
import "./DetallePelicula.css"

class DetallePelicula extends Component {
  render() {
    const { details, handleAddToFavorites } = this.props;

    return (
      <div className="detalle-container">
        <h2>{details.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
        />
        <p><strong>Calificación:</strong> {details.vote_average}</p>
        <p><strong>Fecha de estreno:</strong> {details.release_date}</p>
        <p><strong>Duración:</strong> {details.runtime} minutos</p>
        <p><strong>Sinopsis:</strong> {details.overview}</p>
        <p className="genres"><strong>Géneros:</strong> {details.genres.map((genre) => genre.name).join(', ')}</p>
        <button onClick={handleAddToFavorites}>
          Agregar a Favoritos
        </button>
      </div>
    );
  }
}

export default DetallePelicula;
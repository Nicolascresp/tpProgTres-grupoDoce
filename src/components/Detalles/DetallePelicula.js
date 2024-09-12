import React, { Component } from 'react';
import "./DetallePelicula.css"

class DetallePelicula extends Component {
  render() {
    const { details, handleAddToFavorites } = this.props;

    return (
      <div>
        <h2>{details.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title}
        />
        <p>Calificación: {details.vote_average}</p>
        <p>Fecha de estreno: {details.release_date}</p>
        <p>Duración: {details.runtime} minutos</p>
        <p>Sinopsis: {details.overview}</p>
        <p>Géneros: {details.genres.map((genre) => genre.name).join(', ')}</p>
        <button onClick={handleAddToFavorites}>
          Agregar a Favoritos
        </button>
      </div>
    );
  }
}

export default DetallePelicula;
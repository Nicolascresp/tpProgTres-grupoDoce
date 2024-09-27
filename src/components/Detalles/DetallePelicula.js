import React, { Component } from 'react';
import "../../components/Detalles/DetallePelicula.css"
import Loader from '../Loader/Loader';

class DetallePelicula extends Component {
    render() {
        const { details, handleAddToFavorites, isFavorite } = this.props;

        if (!details) {
            return < Loader/>;
        }

        const imageUrl = `https://image.tmdb.org/t/p/w500${details.poster_path}`;
        const rating = details.vote_average ? details.vote_average.toFixed(1) : 'N/A';
        const releaseDate = details.release_date || 'N/A';
        const runtime = details.runtime ? `${details.runtime} minutos` : 'N/A';
        const genres = details.genres ? details.genres.map(genre => genre.name).join(', ') : 'N/A';

        return (
            <div className="detalle-container">
                <h2>{details.title || details.name}</h2>
                <img src={imageUrl} alt={details.title || details.name} />
                <p><strong>Calificación:</strong> {rating}</p>
                <p><strong>Fecha de Estreno:</strong> {releaseDate}</p>
                {details.runtime && <p><strong>Duración:</strong> {runtime}</p>}
                {details.genres && <p className="genres"><strong>Género:</strong> {genres}</p>}
                <p><strong>Sinópsis:</strong> {details.overview}</p>
                <button 
                    className={`detalle-favorito ${isFavorite ? 'favorito' : 'no-favorito'}`} 
                    onClick={handleAddToFavorites}
                >
                    {isFavorite ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
                </button>
            </div>
        );
    }
}

export default DetallePelicula;

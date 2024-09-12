import React, { Component } from 'react';
import "./FavoritosCard.css"
import { Link } from 'react-router-dom';

class FavoritosCard extends Component {
  render() {
    const { favorite, onRemoveFavorite } = this.props;
    const { id, title, poster_path } = favorite;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <li>
        <div>
          <img src={imageUrl} alt={title} style={{ width: '100px', height: '150px' }} />
          <Link to={`/detalle/${id}`}>{title}</Link>
          <button onClick={() => onRemoveFavorite(id)}>
            Eliminar de Favoritos
          </button>
        </div>
      </li>
    );
  }
}

export default FavoritosCard;
import React, { Component } from 'react';
import "./FavoritosCard.css";
import { Link } from 'react-router-dom';

class FavoritosCard extends Component {
  render() {
    const { favorite, onRemoveFavorite } = this.props;
    const { id, title, poster_path } = favorite;
    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
      <li className="favoritos-card">
        <div className="favoritos-card-content">
          <img className="favoritos-card-img" src={imageUrl} alt={title} />
          <Link to={`/detalle/${id}`} className="favoritos-card-title">{title}</Link>
          <button className="favoritos-card-button" onClick={() => onRemoveFavorite(id)}>
            Eliminar de Favoritos
          </button>
          <Link to={`/detalle/${id}`}>
            <button className="favoritos-card-detail-button">
              Ver Detalle
            </button>
          </Link>
        </div>
      </li>
    );
  }
}

export default FavoritosCard;
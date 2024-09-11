import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FavoritosList extends Component {
  render() {
    const { favorites, onRemoveFavorite } = this.props;

    if (!favorites || favorites.length === 0) {
      return <p>No hay favoritos disponibles.</p>;
    }

    return (
      <div>
        <h2>Favoritos</h2>
        <ul>
          {favorites.map((fav) => (
            <li key={fav.id}>
              <Link to={`/detalle/${fav.id}`}>{fav.title}</Link>
              <button onClick={() => onRemoveFavorite(fav.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FavoritosList;
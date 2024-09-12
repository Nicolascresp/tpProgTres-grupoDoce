import React, { Component } from 'react';
import FavoritosCard from '../FavoritosCard/FavoritosCard';  
import "./FavoritosList.css"

class FavoritosList extends Component {
  render() {
    const { favorites, onRemoveFavorite } = this.props;

    if (!favorites || favorites.length === 0) {
      return (
        <>
         <h2>Aun no seleccionaste tus Series y Peliculas favoritas.</h2>
         <h4>¡No esperes mas y empieza a configurara tu lista segun tus gustos!</h4>
        </>

      )
    }

    return (
      <div>
        <h2>Lista de tus Series y Peliculas favoritas</h2>
        <ul>
          {favorites.map((fav) => (
            <FavoritosCard
              key={fav.id}
              favorite={fav}
              onRemoveFavorite={onRemoveFavorite}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default FavoritosList;
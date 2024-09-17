import React, { Component } from 'react';
import FavoritosCard from "../FavoritosCard/FavoritosCard";
import "./FavoritosList.css";

class FavoritosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: [],
      error: null
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.favorites !== this.props.favorites) {
      this.fetchMovieDetails();
    }
  }

  fetchMovieDetails = () => {
    const favoriteIds = this.props.favorites;

    if (!favoriteIds.length) {
      this.setState({ movieDetails: [], error: null });
      return;
    }

    Promise.all(
      favoriteIds.map(id =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2`)
          .then(response => response.ok ? response.json() : Promise.reject('Error fetching data'))
          .catch(error => this.setState(prevState => ({
            error: error.message || 'Error fetching data',
            movieDetails: prevState.movieDetails 
          })))
      )
    )
    .then(movies => this.setState({ movieDetails: movies, error: null }))
    .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { movieDetails, error } = this.state;
    const { onRemoveFavorite } = this.props;

    return (
      <div>
        {error && <p>Error al cargar películas: {error}</p>}
        {!movieDetails.length ? (
          <div className="empty-favorites-container">
            <p className="empty-favorites-message">Aún no has seleccionado tus series y películas favoritas.</p>
            <p className="empty-favorites-description">¡No esperes más y empieza a configurar tu lista según tus gustos!</p>
          </div>
        ) : (
          <>
            <h2 className="peliculasFavoritosTitulo">Lista de tus Películas favoritas</h2>
            <ul className="favoritos-list">
              {movieDetails.map((movie) => (
                <li key={movie.id} className="favoritos-item">
                  <FavoritosCard
                    favorite={movie}
                    onRemoveFavorite={onRemoveFavorite}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default FavoritosList;
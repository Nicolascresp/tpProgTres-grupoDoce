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
            movieDetails: prevState.movieDetails // Preserve existing details on error
          })))
      )
    )
    .then(movies => this.setState({ movieDetails: movies, error: null }))
    .catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { movieDetails, error } = this.state;
    const { onRemoveFavorite } = this.props;
    console.log(movieDetails)

    return (
      <div>
        {error && <p>Error al cargar películas: {error}</p>}
        {!movieDetails.length ? (
          <>
            <h2>Aún no has seleccionado tus series y películas favoritas.</h2>
            <h4>¡No esperes más y empieza a configurar tu lista según tus gustos!</h4>
          </>
        ) : (
          <>
            <h2>Lista de tus Series y Películas favoritas</h2>
            <ul>
              {movieDetails.map((movie) => (
                <FavoritosCard
                  key={movie.id}
                  favorite={movie}
                  onRemoveFavorite={onRemoveFavorite}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default FavoritosList;




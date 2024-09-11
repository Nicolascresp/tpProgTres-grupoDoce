import React, { Component } from 'react';
import { options } from '../options'; 

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null, 
      isFavorite: false, 
      type: '', 
    };
  }

  componentDidMount() {
    const { id, type } = this.props.match.params; 
    this.setState({ type }); 

    
    const endpoint =
      type === 'movie'
        ? `https://api.themoviedb.org/3/movie/${id}`
        : `https://api.themoviedb.org/3/tv/${id}`;

    fetch(endpoint, options) 
      .then((response) => response.json())
      .then((data) => {
        this.setState({ details: data }); 
      })
      .catch((e) => console.log(e));
  }

  handleAddToFavorites = () => {
    const { id } = this.props.match.params;
    const { type } = this.state; 
    fetch(`https://api.themoviedb.org/3/account/21512708/favorite`, {
      method: 'POST',
      headers: options.headers,
      body: JSON.stringify({
        media_type: type,
        media_id: id,
        favorite: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState({ isFavorite: true }); 
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { details, type } = this.state;

    if (!details) return <p>Cargando detalles...</p>; 

    return (
      <div>
        <h2>{details.title || details.name}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          alt={details.title || details.name}
        />
        <p>Calificación: {details.vote_average}</p>
        <p>Fecha de estreno: {details.release_date || details.first_air_date}</p>
        {type === 'movie' && <p>Duración: {details.runtime} minutos</p>}
        <p>Sinopsis: {details.overview}</p>
        <p>Géneros: {details.genres.map((genre) => genre.name).join(', ')}</p>
        <button onClick={this.handleAddToFavorites}>
          {this.state.isFavorite ? 'En Favoritos' : 'Agregar a Favoritos'}
        </button>
      </div>
    );
  }
}

export default Detalle;
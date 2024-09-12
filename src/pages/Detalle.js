import React, { Component } from 'react';
import DetallePelicula from '../components/Detalles/DetallePelicula';
import DetalleSerie from '../components/Detalles/DetalleSerie';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      isFavorite: false,
    };
  }

  componentDidMount() {
    const { id, section } = this.props.match.params;
    const isMovie = section.startsWith('pelicula');
    const apiKey = '8ba8bbe7dfab5ab5da50fbbbaf3e12a2'; 
    const endpoint = isMovie
      ? `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      : `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ details: data });
      })
      .catch((e) => console.log(e));
  }
  handleAddToFavorites = () => {
    const { id, section } = this.props.match.params;
    const isMovie = section.startsWith('pelicula');
    const apiKey = '8ba8bbe7dfab5ab5da50fbbbaf3e12a2';
    const mediaType = isMovie ? 'movie' : 'tv';
    const accountId = '21512708'; 
    const requestBody = {
      media_type: mediaType,
      media_id: id,
      favorite: !this.state.isFavorite,
    };

    fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${apiKey}&session_id=<SESSION_ID>`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then(() => {
        this.setState((prevState) => ({ isFavorite: !prevState.isFavorite }));
      })
      .catch((e) => console.log(e));
  };

  

  render() {
    const { details } = this.state;
    const { section } = this.props.match.params;
    const isMovie = section.startsWith('pelicula');

    if (!details) return <p>Cargando detalles...</p>;

    return (
      <div>
        {isMovie ? (
          <DetallePelicula
            details={details}
          />
        ) : (
          <DetalleSerie
            details={details}
          />
        )}
      </div>
    );
  }
}

export default Detalle;
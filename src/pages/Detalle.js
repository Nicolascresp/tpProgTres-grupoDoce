import React, { Component } from 'react';
import DetallePelicula from '../components/Detalles/DetallePelicula';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      isFavorite: false,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const apiKey = '8ba8bbe7dfab5ab5da50fbbbaf3e12a2'; 
    const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ details: data });
      })
      .catch((e) => console.log(e));
  }

  handleAddToFavorites = () => {
    const { id } = this.props.match.params;
    const apiKey = '8ba8bbe7dfab5ab5da50fbbbaf3e12a2';
    const accountId = '21512708'; 
    const requestBody = {
      media_type: 'movie',
      media_id: id,
      favorite: !this.state.isFavorite,
    };

    fetch(`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2&session_id=<SESSION_ID>`, {
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

    if (!details) return <p>Cargando detalles...</p>;

    return (
      <div>
        <DetallePelicula
          details={details}
          handleAddToFavorites={this.handleAddToFavorites}
          isFavorite={this.state.isFavorite}
        />
      </div>
    );
  }
}

export default Detalle;
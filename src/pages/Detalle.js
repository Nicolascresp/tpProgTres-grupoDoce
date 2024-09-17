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

        const favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favoritos.includes(id);
        this.setState({ isFavorite });
      })
      .catch((e) => console.log(e));
  }

  handleAddToFavorites = () => {
    const { id } = this.props.match.params;
    let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(favoriteId => favoriteId !== id);
    } else {
      favoritos.push(id);
    }
    if (localStorage.getItem("favorites")){
      localStorage.removeItem('favorites');
      localStorage.setItem('favorites', JSON.stringify(favoritos));
    } else {
      localStorage.setItem('favorites', JSON.stringify(favoritos));
    }


    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite
    }));
  };

  render() {
    const { details, isFavorite } = this.state;


    return (
      <div>
        <DetallePelicula
          details={details}
          handleAddToFavorites={this.handleAddToFavorites}
          isFavorite={isFavorite}
        />
      </div>
    );
  }
}

export default Detalle;
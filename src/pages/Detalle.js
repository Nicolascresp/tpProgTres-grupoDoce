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
    let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favoriteId => favoriteId !== id);
        localStorage.removeItem('favorites')
        localStorage.setItem('favorites', JSON.stringify(favoritos));
    } else {
        favoritos.push(id);
        localStorage.removeItem('favorites')
        localStorage.setItem('favorites', JSON.stringify(favoritos));
    }
    this.setState((prevState) => {
      return { isFavorite: !prevState.isFavorite };
    });
    
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
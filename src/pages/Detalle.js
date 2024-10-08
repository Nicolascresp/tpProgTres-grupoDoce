import React, { Component } from 'react';
import DetallePelicula from '../components/Detalles/DetallePelicula';
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      isFavorite: false,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
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
      .catch((e) => {});
  }

  handleAddToFavorites = () => {
    const { id } = this.props.match.params;
    let favoritos = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favoritos.includes(id)) {
      favoritos = favoritos.filter(favoriteId => favoriteId !== id);
    } else {
      favoritos.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favoritos));

    this.setState((prevState) => ({
      isFavorite: !prevState.isFavorite
    }));
  };

  render() {
    const { details, isFavorite } = this.state;

    return (
      <div>
        <ResultadosBusqueda history ={this.props.history}/>
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

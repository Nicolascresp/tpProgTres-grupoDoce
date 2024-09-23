import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies/PopularMovies';
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Populares: [],
      PopularesPrimeras: [],
      moviesFiltrado: [], 
      cargarMas: false,
      nameValue: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Populares: data.results,
          PopularesPrimeras: data.results.slice(0, 10),
          moviesFiltrado: data.results 
        });
      })
      .catch((e) => console.log(e));
  }

  cargarMas() {
    this.setState({
      cargarMas: true
    });
  }

  handleFilterChange(event) {
    const filterValue = event.target.value; 
    this.setState({
      nameValue: filterValue,
      moviesFiltrado: filterValue === "" ? this.state.  Populares : this.state.Populares.filter(movie => movie.title.toLowerCase().includes(filterValue))
    });
  }

  render() {
    return (
      <>

        
        <h2 className='titulo'> Peliculas Populares</h2>

        <form className='form'>
          <input
            placeholder='Buscar Pelicula...'
            className="input"
            value={this.state.nameValue}
            onChange={(event) => this.handleFilterChange(event)}
          />
        </form>

        <section className='home-movies'>
          <PopularMovies dataPopulares={this.state.cargarMas ? this.state.moviesFiltrado : this.state.moviesFiltrado.slice(0, 10)} />
        </section>

        <button className={this.state.cargarMas ? 'esconder' : 'buttonVermas'} onClick={() => this.cargarMas()}>
          {this.state.cargarMas ? '' : 'Cargar Mas...'}
        </button>
      </>
    );
  }
}

export default Populares;

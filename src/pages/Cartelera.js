import React, { Component } from 'react';
import PeliculasCartelera from '../components/PeliculasCartelera/PeliculasCartelera';
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';

class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cartelera: [],
      CarteleraInicio: [],
      moviesFiltrado: [], 
      cargarMas: false,
      nameValue: ""
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Cartelera: data.results,
          CarteleraInicio: data.results.slice(0, 10),
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
      moviesFiltrado: filterValue === "" ? this.state.Cartelera : this.state.Cartelera.filter(movie => movie.title.toLowerCase().includes(filterValue))
    });
  }

  render() {
    return (
      <>

        <ResultadosBusqueda history ={this.props.history}/>
        <h2 className='titulo'> Peliculas en Cartelera</h2>

        <form className='form'>
          <input
            placeholder='Buscar Pelicula...'
            className="input"
            value={this.state.nameValue}
            onChange={(event) => this.handleFilterChange(event)}
          />
        </form>

        <section className='home-movies'>
          <PeliculasCartelera dataCartelera={this.state.cargarMas ? this.state.moviesFiltrado : this.state.moviesFiltrado.slice(0, 10)} />
        </section>

        <button className={this.state.cargarMas ? 'esconder' : 'buttonVermas'} onClick={() => this.cargarMas()}>
          {this.state.cargarMas ? '' : 'Cargar Mas...'}
        </button>
      </>
    );
  }
}

export default Cartelera;

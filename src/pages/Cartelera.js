import React, { Component } from 'react';
import PeliculasCartelera from '../components/PeliculasCartelera/PeliculasCartelera';

class Cartelera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cartelera: [],
      filterMovies: [],
      filterValue: '',
      isLoading: true,
      actualPage : 1
    };
  }

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Cartelera: data.results,
          filterMovies: data.results,
          actualPage : this.state.actualPage +1 
        });
      })
      .catch((e) => console.log(e));

  }

  handleFilterChange = (event) => {
    const userValue = event.target.value;
    this.setState({
      filterValue: userValue,
      filterMovies: this.state.Cartelera.filter(movie =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
    )});
  }

  handleLoadMore () {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        Cartelera: this.state.Cartelera.concat(data.results),
        filterMovies: data.results,
        actualPage : this.state.actualPage +1
      });
    })
    .catch((e) => console.log(e));}

  render() {
    return (
      <>
        
        <h2 className='titulo'> Peliculas en Cartelera</h2>

        <form className='form'>
          <input
            placeholder='Buscar Pelicula...'
            className="input"
            value={this.state.filterValue} 
            onChange={this.handleFilterChange}
          />
        </form>

        <section className='home-movies'>
          <PeliculasCartelera Cartelera={this.state.filterMovies} /> 
        </section>

        <button className= 'buttonVermas' onClick={() => this.handleLoadMore()}>
          Cargar Mas
        </button>
      </>
    );
  }
}

export default Cartelera;

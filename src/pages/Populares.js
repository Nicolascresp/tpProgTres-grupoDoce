import React, { Component } from 'react';
import PopularMovies from "../components/PopularMovies/PopularMovies"

class Populares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Populares: [],
      filterMovies: [],
      filterValue: '',
      isLoading: true,
      actualPage : 1
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          Populares: data.results,
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
      filterMovies: this.state.Populares.filter(movie =>
        movie.title.toLowerCase().includes(userValue.toLowerCase())
      )
    });
  }

  handleLoadMore () {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=56c25df0bc04ec0dd18325a8ea74e10c&language=en-US&page=${this.state.actualPage}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        Populares: this.state.Populares.concat(data.results),
        filterMovies: data.results,
        actualPage : this.state.actualPage +1
      });
    })
    .catch((e) => console.log(e));
  }

  
  render() {
    return (
      <>
        <h2 className='titulo'> Películas Populares</h2>

        <form className='form'>
          <input 
            className="input" 
            value={this.state.filterValue} 
            onChange={this.handleFilterChange} 
          />
        </form>

        <section className='home-movies'>
          <PopularMovies Populares={this.state.filterMovies} />
        </section>

        <button className = "buttonVermas" onClick={() => this.handleLoadMore()}>
          CARGAR MAS
        </button>
      </>
    );
  }
}

export default Populares;

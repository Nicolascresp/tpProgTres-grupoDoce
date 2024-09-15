import React, { Component } from 'react';
import TopRatedMoviesCard from '../TopRatedMoviesCard/TopRatedMoviesCard';

class TopRatedMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        this.setState({ movies: data.results});
      })
      .catch((e) => console.log(e));
  }


  render() {
    return (
      <div className='peliculas-pop'>

        {this.state.movies.slice(0, 4).map((pelicula) => (<TopRatedMoviesCard key={pelicula.id} id={pelicula.id} description={pelicula.overview} title={pelicula.title} img={pelicula.poster_path}  />))}
      </div>
    );
  }
}

export default TopRatedMovies;
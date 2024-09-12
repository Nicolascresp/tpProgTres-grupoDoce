import React, { Component } from 'react';
import PeliculasHome from '../components/PeliculasHome/PeliculasHome';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      section: null,
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results)
        this.setState({ movies: data.results, section: "peliculaPopular"});
      })
      .catch((e) => console.log(e));
  }


  render() {
    console.log(this.state.movies)
    return (
      <div>
        <h1>Populares</h1>
        {this.state.movies.map((pelicula) => (<PeliculasHome key={pelicula.id} id={pelicula.id} description={pelicula.overview}  title={pelicula.title} img={pelicula.poster_path} section={this.state.section} />))}
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeMovies from '../components/HomeMovies/HomeMovies';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <section className='home-movies'>

          <h2 className='titulo'>Peliculas Populares</h2>
          <HomeMovies url="https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas Populares" />

          <h2>Peliculas en Cartelera</h2>
          <HomeMovies url="https://api.themoviedb.org/3/movie/now_playing?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas en Cartelera" />

      </section>
    );
  }
}

export default Home;
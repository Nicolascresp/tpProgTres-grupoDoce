import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeMovies from '../components/HomeMovies/HomeMovies';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <>

        <h2 className='titulo'> Peliculas Populares</h2>

        <section className='home-movies'>

          <HomeMovies url="https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas Populares" />

        </section>

        <button className='buttonVermas'>Ver Mas</button>

        <h2 className='titulo'> Peliculas en Cartelera</h2>

        <section className='home-movies'>
          <HomeMovies url="https://api.themoviedb.org/3/movie/now_playing?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas en Cartelera" />
        </section>

        <button className='buttonVermas'>Ver Mas</button>
      </>
    );
  }
}

export default Home;
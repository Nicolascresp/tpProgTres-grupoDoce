import React, { Component } from 'react';
import PeliculasPopulares from '../components/PeliculasPopulares/PeliculasPopulares';
import TopRatedMovies from '../components/TopRatedMovies/TopRatedMovies';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <>
        <div className='header-container'>
          <h1 className='titulo-peliculaspop'>Películas Populares</h1>
          <button className='ver-todas-button'>Ver Todas</button>
        </div>          
        <PeliculasPopulares />
        
        <div className='header-container'>
          <h1 className='titulo-peliculaspop'>Top Rated Movies</h1>
          <button className='ver-todas-button'>Ver Todas</button>
        </div>   

        <TopRatedMovies />

      </>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import PeliculasPopulares from '../components/PeliculasPopulares/PeliculasPopulares';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
        <>
          <h1>Peliculas Populares</h1>
          <PeliculasPopulares />
        </>
    );
  }
}

export default Home;
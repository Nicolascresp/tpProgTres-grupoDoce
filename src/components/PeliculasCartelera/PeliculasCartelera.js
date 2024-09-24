import React, { Component } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

class PeliculasCartelera extends Component {
  constructor(props) {
    super(props)
  }
  render() { 
     return (
    <>
    
     {this.props.Cartelera.map((pelicula) => (
          <MoviesCard
            key={pelicula.id}
            id={pelicula.id}
            description={pelicula.overview}
            title={pelicula.title}
            img={pelicula.poster_path}

          />
        ))}
    </>        
       
    
    );
  }
}

export default PeliculasCartelera;
import React, { Component } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    
  }

  render() { 

    return (
    <>
    
     {this.props.Populares.map((pelicula) => (
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

export default PopularMovies;
import React, { Component } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

class HomeMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: [],
     
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Movies: data.results });
      })
      .catch((e) => {});
  }

  render() { 

    return (
    <>
    
     {this.state.Movies.slice(0, 5).map((pelicula) => (
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

export default HomeMovies;
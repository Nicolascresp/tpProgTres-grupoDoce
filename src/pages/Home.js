import React, { Component } from 'react';
import HomeMovies from '../components/HomeMovies/HomeMovies';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Populares: [], 
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.setState({ Populares: data.results });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div className='peliculas-pop'>
        {this.state.Populares.slice(0, 5).map((pelicula) => (
          <HomeMovies 
            key={pelicula.id} 
            id={pelicula.id} 
            description={pelicula.overview}  
            title={pelicula.title} 
            img={pelicula.poster_path}  
          />
        ))}
      </div>
    );
  }
}

export default Home;

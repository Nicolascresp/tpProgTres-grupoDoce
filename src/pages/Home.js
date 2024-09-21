import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeMovies from '../components/HomeMovies/HomeMovies';
import  ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';

class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      
    }

  }
  componentDidMount(){

  }

  handleRedirect(){
  this.props.history.push('/search', {id:10})
  }
  
  render() {

    return (
      <>
        
       <ResultadosBusqueda history ={this.props.history}/>
       
       <h2 className='titulo'> Peliculas Populares</h2>

        <section className='home-movies'>

          <HomeMovies url="https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas Populares" />

          <Link to={`/Populares`} className='buttonVermasHome'>
            Ver Mas
          </Link>

        </section>

        

        <h2 className='titulo'> Peliculas en Cartelera</h2>

        <section className='home-movies'>
          <HomeMovies url="https://api.themoviedb.org/3/movie/now_playing?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2" titulo="Peliculas en Cartelera" />

          <Link to={`/Populares`} className='buttonVermasHome'>
            Ver Mas
          </Link>

        </section>

      </>
    );
  }
}

export default Home;
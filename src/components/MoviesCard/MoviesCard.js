import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./MoviesCard.css"
import Favoritos from '../../pages/Favoritos';

class MoviesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      VerDesc: false,
      esFavorito: false
    };
  }

  verdescripcion() {
    this.setState({
      VerDesc: !this.state.VerDesc,
    });
  }

  agregarFavoritos() {

    const storage = localStorage.getItem("Favoritos")

    if (storage !== null) {

      const parsedArray = JSON.parse(storage)
      parsedArray.push(this.props.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem("Favoritos", stringArray)


    } else {
      const primerMovie = [this.props.id]
      const stringArray = JSON.stringify(primerMovie)
      localStorage.setItem("Favoritos", stringArray)
    }

    this.setState(
      {
        esFavorito: true
      }
    )

  }

  sacarFavoritos() {
    const storage = localStorage.getItem("Favoritos")
    const parsedArray = JSON.parse(storage)
    const favoritosRestantes = parsedArray.filter(id => id !== this.props.id)
    const stringArray = JSON.stringify(favoritosRestantes)
      
    localStorage.setItem("Favoritos", stringArray)
    
    this.setState(
      {
        esFavorito: false
      }
    )

  }

  componentDidMount () {
    const storage = localStorage.getItem("Favoritos")

    if (storage !== null) {

      const parsedArray = JSON.parse(storage)
      const estaEnFavoritos = parsedArray.includes (this.props.id)
      this.setState({
        
      })
    } else {
      
    }  
  }

  render() {

    const { title, img, id } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${img}`;

    return (

      <article className='movie-card'>
        <Link to={`/Detalle/${id}`} className='titulo'>
          <h1>{title}</h1>
        </Link>
        <img src={imageUrl} alt={title} />

        <button onClick={() => this.verdescripcion()} className='buttonDesc'>
          {this.state.VerDesc ? 'Ocultar Descripción' : 'Descripción'}
        </button>

        <p className={this.state.VerDesc ? 'showDescription' : 'hideDescription'}>
          {this.props.description}
        </p>

        <Link to={`/Detalle/${id}`} className='verdesc'>
          Ver Detalle
        </Link>

        <button className='buttonFavs' onClick={() => !this.state.esFavorito ? this.agregarFavoritos() : this.sacarFavoritos()}>

          {!this.state.esFavorito ? "AGREGAR A FAVORITOS ⭐" : "QUITAR DE FAVORITOS ⭐"}


        </button>

      </article>

    );
  }
}

export default MoviesCard;

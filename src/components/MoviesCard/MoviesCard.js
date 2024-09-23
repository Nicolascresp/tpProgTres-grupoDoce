import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./MoviesCard.css"

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

    const storage = localStorage.getItem("favorites")

    if (storage !== null) {

      const parsedArray = JSON.parse(storage)
      parsedArray.push(this.props.id)
      const stringArray = JSON.stringify(parsedArray)
      localStorage.setItem("favorites", stringArray)


    } else {
      const primerMovie = [this.props.id]
      const stringArray = JSON.stringify(primerMovie)
      localStorage.setItem("favorites", stringArray)
    }

    this.setState(
      {
        esFavorito: true
      }
    )

  }

  sacarFavoritos() {
    const storage = localStorage.getItem("favorites");
    
    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const favoritosRestantes = parsedArray.filter(id => id !== this.props.id);
      const stringArray = JSON.stringify(favoritosRestantes);
      localStorage.setItem("favorites", stringArray); 
    } 
  
    this.setState({
      esFavorito: false
    });
  }
  
  componentDidMount() {

console.log(this.props)

    const storage = localStorage.getItem("favorites");

    if (storage !== null) {
      const parsedArray = JSON.parse(storage);
      const estaEnFavoritos = parsedArray.includes(this.props.id);

      if (estaEnFavoritos) {
        this.setState({
          esFavorito: true
        });
      }
    }
  }

  render() {

    const { title, img, id } = this.props;
    const imageUrl = `https://image.tmdb.org/t/p/w500${img}`;

    return (

      <article className='movie-card'>
        <Link to={`/Detalle/${id}`}>
          <h2 className="titulo-card">{title}</h2>
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

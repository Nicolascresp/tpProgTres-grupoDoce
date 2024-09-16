import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./MoviesCard.css"

class MoviesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        VerDesc: false,
    };
  }

  verdescripcion() {
    this.setState({
      VerDesc: !this.state.VerDesc,
    });
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

          <button onClick={() => this.verdescripcion ()} className='buttonDesc'>
            {this.state.VerDesc ? 'Ocultar Descripción' : 'Descripción'}
          </button>

          <p className={this.state.VerDesc ? 'showDescription' : 'hideDescription'}>
            {this.props.description}
          </p>

          <Link to={`/Detalle/${id}`} className='verdesc'>
            Ver Detalle
          </Link>
        </article>
    );
  }
}

export default MoviesCard;

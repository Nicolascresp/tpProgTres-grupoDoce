import React, { Component } from 'react';
import './Error404.css'; 

class Error404 extends Component {
    render() {
      return (
        <section className="textoError">
        <img src="/img/Error404.jpg" alt="Error 404" className="imagenError" />
        <p>Error:</p>
        <p>La página que estabas buscando no existe</p>
        <p>Haga click <a href='/' className="linkError">aqui</a> para volver a la página de inicio
        </p>
    </section>
        )
    }
  }

export default Error404
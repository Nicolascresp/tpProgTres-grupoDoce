import React, { Component } from 'react';
import { options } from '../options'; 

class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null, 
    };
  }

componentDidMount(){
    fetch("https://api.themoviedb.org/3/movie/top_rated", options)
    .then((response) => response.json())
    .then((data) => this.setState({ info: data.results }))
    .catch((e) => {});
}

  render() {

    return (
      <div>
        <h2>Hola</h2>
       
      </div>
    );
  }
}

export default Detalle;
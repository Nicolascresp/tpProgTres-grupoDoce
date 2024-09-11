import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], 
    };
  }


  render() {
    const { movies, error } = this.state;

    return (
      <div>
        <h1>Top Rated Movies</h1>
        
      </div>
    );
  }
}

export default Home;
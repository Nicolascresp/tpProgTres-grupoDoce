import React, { Component } from "react";
import { options } from "../options"; 
import FavoritosList from "../components/FavoritosList/FavoritosLists";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [], 
      error: null 
    };
  }

  componentDidMount() {
    this.fetchFavorites(); 
  }

  fetchFavorites = () => {
    fetch("https://api.themoviedb.org/3/account/21512708/favorite", options)
      .then((response) => response.json())
      .then((data) => this.setState({ favorites: data.results }))
      .catch((error) => this.setState({ error: 'Error fetching data' }));
  };

  handleRemoveFavorite = (id) => {
    fetch(`https://api.themoviedb.org/3/account/21512708/favorite/${id}`, {
      method: "DELETE",
      headers: {
        ...options.headers, 
        Authorization: 'Bearer e49603c6bbe4b318b8fbec1efdaa1adb' 
      },
    })
      .then(() => {
        this.setState((prevState) => ({
          favorites: prevState.favorites.filter((fav) => fav.id !== id),
        }));
      })
      .catch(() => this.setState({ error: 'Error removing favorite' }));
  };

  render() {
    const { favorites } = this.state;

    return (
      <FavoritosList
        favorites={favorites}
        onRemoveFavorite={this.handleRemoveFavorite}
      />
    );
  }
}

export default Favoritos;
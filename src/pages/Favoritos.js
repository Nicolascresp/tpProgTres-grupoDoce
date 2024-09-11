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
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Error fetching favorites:', text);
            return Promise.reject('Network response was not ok');
          });
        }
        return response.json();
      })
      .then((data) => this.setState({ favorites: data.results || [] })) 
      .catch((e) => this.setState({ error: e.message || 'Error fetching data' }));
  };

  handleRemoveFavorite = (id) => {
    fetch(`https://api.themoviedb.org/3/account/21512708/favorite/${id}`, {
      method: "DELETE",
      headers: {
        ...options.headers, 
        Authorization: 'Bearer e49603c6bbe4b318b8fbec1efdaa1adb' 
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            console.error('Error removing favorite:', text);
            return Promise.reject('Network response was not ok');
          });
        }
        return response.json();
      })
      .then(() => {
        this.setState((prevState) => ({
          favorites: prevState.favorites.filter((fav) => fav.id !== id),
        }));
      })
      .catch((e) => this.setState({ error: e.message || 'Error removing favorite' }));
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
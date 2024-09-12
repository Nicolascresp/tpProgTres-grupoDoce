import React, { Component } from "react";
import FavoritosList from "../components/FavoritosList/FavoritosList"

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
    fetch("https://api.themoviedb.org/3/account/null/favorite", {
      method: "GET",
      headers: {
        Authorization: "Bearer 8ba8bbe7dfab5ab5da50fbbbaf3e12a2",
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => this.setState({ favorites: data.results }))
      .catch((e) => this.setState({ error: e.message || "Error fetching data" }));
  };

  handleAddFavorite = (id, isMovie) => {
    fetch("https://api.themoviedb.org/3/account/null/favorite", {
      method: "POST",
      headers: {
        Authorization: "Bearer 8ba8bbe7dfab5ab5da50fbbbaf3e12a2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        media_type: isMovie ? "movie" : "tv",
        media_id: id,
        favorite: true
      })
    })
      .then((response) => response.json())
      .then(() => {
        this.fetchFavorites(); 
      })
      .catch((e) => this.setState({ error: e.message || "Error adding favorite" }));
  };

  handleRemoveFavorite = (id, isMovie) => {
    fetch("https://api.themoviedb.org/3/account/null/favorite", {
      method: "POST",
      headers: {
        Authorization: "Bearer 8ba8bbe7dfab5ab5da50fbbbaf3e12a2",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        media_type: isMovie ? "movie" : "tv",
        media_id: id,
        favorite: false
      })
    })
      .then((response) => response.json())
      .then(() => {
        this.setState((prevState) => ({
          favorites: prevState.favorites.filter((fav) => fav.id !== id)
        }));
      })
      .catch((e) => this.setState({ error: e.message || "Error removing favorite" }));
  };

  render() {
    const { favorites, error } = this.state;

    return (
      <div>
        <h2>Mis Favoritos</h2>
        {error && <p>{error}</p>}
        <FavoritosList
          favorites={favorites}
          onRemoveFavorite={this.handleRemoveFavorite}
        />
      </div>
    );
  }
}

export default Favoritos;
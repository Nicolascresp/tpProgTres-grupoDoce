import React, { Component } from "react";
import FavoritosList from "../components/FavoritosList/FavoritosList";

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteIds: [],
      error: null
    };
  }

  componentDidMount() {
    this.FavoritesFromLocalStorage();
  }

  FavoritesFromLocalStorage = () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      this.setState({ favoriteIds: storedFavorites });
    } catch (error) {
      this.setState({ error: "Error loading favorites from localStorage" });
    }
  };

  handleRemoveFavorite = (id) => {
    const updatedFavorites = this.state.favoriteIds.filter(favId => favId !== id);
    this.setState({ favoriteIds: updatedFavorites }, () => {
      localStorage.removeItem("favorites");
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    });
  };

  render() {
    const { favoriteIds, error } = this.state;
    console.log(favoriteIds);
    return (
      <div>
        {error && <p>{error}</p>}
        <FavoritosList
          favorites={favoriteIds}
          onRemoveFavorite={this.handleRemoveFavorite}
        />
      </div>
    );
  }
}

export default Favoritos;
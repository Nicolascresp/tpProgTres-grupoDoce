import React, { Component } from "react";
import FavoritosList from "../components/FavoritosList/FavoritosList";
import Loader from "../components/Loader/Loader";


class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteIds: [],
      error: null,
      isLoading: true
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    this.FavoritesFromLocalStorage();
  }
  
  FavoritesFromLocalStorage = () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      console.log("Initial favorites:", storedFavorites);
  
      const uniqueFavorites = [...new Set(storedFavorites.map(favId => favId.toString()))];
  
      this.setState({ favoriteIds: uniqueFavorites, isLoading: false });
    } catch (error) {
      this.setState({ error: "Error loading favorites from localStorage" ,  isLoading: false});
    }
  };
  
  handleRemoveFavorite = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = storedFavorites.filter(favId => favId !== id.toString());
    localStorage.removeItem("favorites")
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    this.setState({ favoriteIds: updatedFavorites }, () => {
      console.log("Updated favorite IDs:", this.state.favoriteIds);
    });
  };

  render() {
    const { favoriteIds, error, isLoading } = this.state;
    console.log("Stored favorites:", JSON.parse(localStorage.getItem("favorites")));

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
import React, { Component } from "react";
import FavoritosList from "../components/FavoritosList/FavoritosList";


class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteIds: [],
      error: null,
    
    };
  }

  componentDidMount() {
    
    this.FavoritesFromLocalStorage();
  }
  
  FavoritesFromLocalStorage = () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
  
      const uniqueFavorites = [...new Set(storedFavorites.map(favId => favId.toString()))];
  
      this.setState({ favoriteIds: uniqueFavorites});
    } catch (error) {
      this.setState({ error: "Error loading favorites from localStorage"});
    }
  };
  
  handleRemoveFavorite = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = storedFavorites.filter(favId => favId !== id.toString());
    localStorage.removeItem("favorites")
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    this.setState({ favoriteIds: updatedFavorites }, () => {
      
    });
  };

  render() {
    const { favoriteIds, error } = this.state;
   

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
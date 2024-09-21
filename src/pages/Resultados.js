import { Component } from "react";
import MoviesCard from "../components/MoviesCard/MoviesCard";


 class Resultados extends Component {

    constructor(props){
        super(props)
        this.state = {
            results: [],
        }
    }

    componentDidMount(){
        
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2`)
        .then((resultado) => resultado.json())
        .then((data) => this.setState({results: data.results}))
        .catch((error) => console.log(error))
    }
    render() {
        return (
            <>
                <div className="titulo">Resultados de tu busqueda: {this.props.location.state.query}</div>
               { this.state.results.map((pelicula) => <MoviesCard key={pelicula.name} datos={pelicula}/>)}

            </>
        )
    }
}
export default Resultados
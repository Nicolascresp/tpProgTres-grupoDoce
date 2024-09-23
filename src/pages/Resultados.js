import { Component } from "react";
import MoviesCard from "../components/MoviesCard/MoviesCard";
import ResultadosBusqueda from "../components/ResultadosBusqueda/ResultadosBusqueda";


 class Resultados extends Component {

    constructor(props){
        super(props)
        this.state = {
            movies: [],
            isLoading: true,
        }
    }

    componentDidMount(){
        this.setState({
            isLoading: true,
        });
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.props.location.state.query}&api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2`)
        .then((response) => response.json())
        .then((data) => this.setState
        ({movies: data.results,
            isLoading: false,
        }))
        .catch((error) => console.log(error))
    }
    render() {
        return (
            <>
                <ResultadosBusqueda history ={this.props.history}/>
                <div className="titulo">Resultados de tu busqueda: {this.props.location.state.query}</div>
                <section className ='home-movies'>
               { this.state.movies.map((pelicula) => <MoviesCard key={pelicula.name}
            id={pelicula.id}
            description={pelicula.overview}
            title={pelicula.title}
            img={pelicula.poster_path}/>)}
            </section>

            </>
        )
    }
}
export default Resultados
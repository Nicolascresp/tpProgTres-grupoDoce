import { Component } from "react";
import MoviesCard from "../components/MoviesCard/MoviesCard";
import Loader from "../components/Loader/Loader";


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
        .catch((error) =>
        this.setState({ isLoading: false }))
    }
    render() {

        const { isLoading, movies } = this.state;

        if (isLoading) {
            return <Loader />;
    } 

        if(movies.length === 0) {
            
                return( 
            <>
                <p className="textoError">No se encontraron resultados para tu busqueda: {this.props.location.state.query}. </p>
                <img className="imagenError" src="/img/thinking-smiley-emoji-thinking.gif" alt="confundido" />
                <p className="textoError">Haga click <a href='/' className="linkError">aqui</a> para volver a la página de inicio</p> 
            </>
        )}
        else{

        
        return (
            <>
                
                <div className="titulo">Resultados de tu busqueda: {this.props.location.state.query}</div>
                <section className ='home-movies'>

                {this.state.movies.map((pelicula) => <MoviesCard key={pelicula.name}
                id={pelicula.id}
                description={pelicula.overview}
                title={pelicula.title}
                img={pelicula.poster_path}/>
                )}
                </section>

            </>
        )}
    }
}
export default Resultados
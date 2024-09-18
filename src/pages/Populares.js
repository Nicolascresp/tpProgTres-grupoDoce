import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies/PopularMovies';
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';


class Populares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Populares: [],

        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                this.setState({ Populares: data.results });
            })
            .catch((e) => console.log(e));
    }

    render() {

        return (
            <>

                <h2 className='titulo'> Peliculas Populares</h2>

                <ResultadosBusqueda />

                <section className='home-movies'>

                    <PopularMovies dataPopulares={this.state.Populares} />

                </section>

            </>
        );
    }
}

export default Populares;
import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies/PopularMovies';
import ResultadosBusqueda from '../components/ResultadosBusqueda/ResultadosBusqueda';


class Populares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Populares: [],
            PopularesPrimeras : [],
            BuscadorPop : [],
            cargarMas : false

        };
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                this.setState({
                    Populares: data.results,
                    PopularesPrimeras: data.results.slice(0, 10) 
                    
                });
            })
            .catch((e) => console.log(e));
    }

    handleFilterChange(){
        this.setState({
        BuscadorPop: this.state.Populares.filter(movie => movie.title.includes(this.state.filterValue) )
        })
        }

    cargarMas () {
        this.setState({
            cargarMas : true

        })
    }


    render() {

        return (
            <>

                <h2 className='titulo'> Peliculas Populares</h2>

            <form>
                <input className = "input" onChange={(e) =>this.handleFilterChange(e) }
                type= 'text' name= 'query' value = {this.state.BuscadorPop} />
                <button className='buttonVermas' onClick={() => this.handleInputSubmit() }
                >Search Movie </button>
            </form>
        
                <section className='home-movies'>
                   <PopularMovies dataPopulares={this.state.cargarMas ? this.state.Populares : this.state.PopularesPrimeras} />
                 

                </section>

                <button className= {this.state.cargarMas ? 'esconder' : 'buttonVermas'} onClick={() => this.cargarMas() } >  {this.state.cargarMas ? '' : 'Cargar Mas...'} </button>


            </>
        );
    }
}

export default Populares;
import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies/PopularMovies';


class Populares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Populares: [],
            PopularesPrimeras : [],
            cargarMas : false,
            nameValue : ""

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

    cargarMas () {
        this.setState({
            cargarMas : true

        })
    }

    handleChangeName(event) {
        this.setState({
            nameValue: event.target.value
        }, () => console.log(this.state.nameValue));
    }
    

    render() {

        return (
            <>

                <h2 className='titulo'> Peliculas Populares</h2>
                
                <form className='form'>
                    <input className = "input" value = {this.state.nameValue} onChange={(event) => this.handleChangeName(event)}>

                    </input>

                    <button type='submit'> Buscar </button>
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
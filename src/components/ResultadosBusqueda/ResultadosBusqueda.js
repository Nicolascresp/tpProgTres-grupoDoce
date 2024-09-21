import React from 'react'
import { Component } from 'react';

 class ResultadosBusqueda extends Component{

    constructor(props){
        super(props)
        this.state={
            query:""
        }
    }
    handleInputChange(e){
        this.setState({
            query: e.target.value
        })
    }

    handleInputSubmit(){
        this.props.history.push('/search', {query: this.state.query})
    }

    render(){
        return(
            <form className="form">
                <input className = "input" onChange={(e) =>this.handleInputChange(e) }
                type= 'text' name= 'query' value = {this.state.query} />
                <button className='buttonVermas' type='submit' placeholder="Buscar Peliculas" onClick={() => this.handleInputSubmit() }
                >Search Movie </button>
            </form>
        )
    }

}

export default ResultadosBusqueda
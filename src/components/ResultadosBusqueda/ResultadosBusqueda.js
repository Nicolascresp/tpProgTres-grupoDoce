import React from 'react'
import './SearchResults.css'

class ResultadosBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '', 
            results: [], 
        };
    }

 ResultadosBusqueda = () => {

    const {query} = this.state

  return (
    <div>ResultadosBusqueda</div>
  )
}}

export default ResultadosBusqueda
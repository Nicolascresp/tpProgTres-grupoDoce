import { Component } from "react";


 class Resultados extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>Resultados {this.props.location.state.query}</div>
        )
    }
}
export default Resultados
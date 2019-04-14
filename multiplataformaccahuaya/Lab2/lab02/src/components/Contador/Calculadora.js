import React, {Component} from 'react';
export default class Calculadora extends Component{
    
    state = {
        cont: this.props.valor,
        cont2: this.props.valor2,
        resultado: 0
    }
    Sumar = () => {
        this.setState({
            resultado: this.state.cont + this.state.cont2
        });
    }
    Restar = () => {
        this.setState({
            resultado: this.state.cont - this.state.cont2
        });
    }
    Multiplicar = () => {
        this.setState({
            resultado: this.state.cont * this.state.cont2
        });
    }
    Dividir = () => {
        this.setState({
            resultado: this.state.cont / this.state.cont2
        });
    }
    render(){
        return(<div >
            <h1>Este es mi componente Calculadora</h1>
            <p>El primer numero sera : {this.props.valor}</p>
            <p>Segundo numero sera : {this.props.valor2}</p>

            <p>Resultado: {this.state.resultado}</p>

            <button onClick={this.Sumar}>Sumar</button>
            <button onClick={this.Restar}>Restar</button>
            <button onClick={this.Multiplicar}>Multiplicar</button>
            <button onClick={this.Dividir}>Dividir</button>
        </div>)
        
    }
}
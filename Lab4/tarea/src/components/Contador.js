import React,{Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class Contador extends Component {
    state = {
        valor: this.props.valor,
        valor2: this.props.valor2,
        resultado: 0
    }
    
    restar = () => {
        this.setState({
            resultado: this.props.valor - this.props.valor2
        });
    }
    sumar = () => {
        this.setState({
            resultado: this.props.valor + this.props.valor2
        });
    }
    multiplicacion = () => {
        this.setState({
            resultado: this.props.valor * this.props.valor2
        });
    }
    division = () => {
        this.setState({
            resultado: this.props.valor / this.props.valor2
        });
    }
    render(){
        return (<View>
            <Text>
                Resultado : {this.state.resultado}
            </Text>
            <Button 
                title='Restar'
                onPress={this.restar}
                />
            <Button 
                title='Sumar'
                color="#841584"
                onPress={this.sumar}
                />
            <Button 
                title='Division'
                color="#841584"
                onPress={this.division}
                />
            <Button 
                title='Multiplicacion'
                color="#841584"
                onPress={this.multiplicacion}
                />
            <Text> Numero1 : {this.props.valor} Numero 2 :{this.props.valor2}</Text>
        </View>);
    }
}
export default Contador;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import Contador from './src/components/Contador';

export default class App extends Component{
  state = {
    valorInicial: "8",
    valorInicial2: "5"
  }
  iniciarContadoresHandler = (texto) => {
    this.setState({
      valorInicial: texto
    });
  }
  iniciarContadoresHandler2 = (texto) => {
    this.setState({
      valorInicial2: texto
    });
  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>Numero 1</Text>
          <TextInput
            value = {this.state.valorInicial}
            onChangeText = {this.iniciarContadoresHandler} 
            />
          <Text style={styles.welcome}>Numero 2</Text>
          <TextInput
            value = {this.state.valorInicial2}
            onChangeText = {this.iniciarContadoresHandler2} 
          />
          <Contador valor={parseInt(this.state.valorInicial)} valor2={parseInt(this.state.valorInicial2)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import Game from './src/components/Game/Game';

export default class App extends Component {
  render() {
    return (

      <Container>
        <Header />
        <Game/>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

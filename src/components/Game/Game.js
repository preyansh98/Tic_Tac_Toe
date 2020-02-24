import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Dimensions } from 'react-native';
import Tile from './Tile';
import {Card, CardItem} from 'native-base';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    reset = (event) => {
        event.preventDefault(); 
        global.tileMap.clear(); 
        global.currentPlayer = 'X';

        console.log("after reset");
        
        this.forceUpdate(); 
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <Text>Welcome to Tic Tac Toe!!!</Text>
                </Card>
                <Card>
                <View style={styles.row}>
                    <View style={styles.tile}>
                        <Tile x="0" y="0"/>
                    </View>
                    <View style={styles.tile}>
                        <Tile x="0" y="1"/>
                    </View>
                    <View style={styles.tile}>
                        <Tile x="0" y="2"/>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.tile}>          
                       <Tile x="1" y="0"/>
                    </View>
                    <View style={styles.tile}>
                         <Tile x="1" y="1"/>
                     </View>
                    <View style={styles.tile}> 
                        <Tile x="1" y="2"/>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.tile}> 
                        <Tile x="2" y="0"/> 
                    </View>
                    <View style={styles.tile}> 
                        <Tile x="2" y="1"/> 
                    </View>
                    <View style={styles.tile}> 
                        <Tile x="2" y="2"/>
                    </View>
                </View>
                <Button title="Reset the game!" onPress = {(event) => this.reset(event)}/>
            </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' , alignContent:'center', justifyContent:'center'},
    row: {
        flexDirection: "row"
    },
    tile: {
        borderWidth: 10,
        width: 100,
        height: 100
    }
});
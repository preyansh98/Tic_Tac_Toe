import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import Tile from './Tile';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        tableData: [
            ['x', 'o', 'o'],
            ['x', 'o', 'o'],
            ['x', 'o', 'o']
        ]
    }

    render() {
        return (
            <View style={styles.container}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    row: {
        flexDirection: "row"
    },
    tile: {
        borderWidth: 10,
        width: 100,
        height: 100
    }
});
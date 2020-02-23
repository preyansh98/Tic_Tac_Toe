import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class App extends React.Component {
    constructor(props){
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
          const state = this.state;
          return (
            <View style={styles.container}>
              <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} textStyle={styles.text}/>
              </Table>  
        </View>
          )
        }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});
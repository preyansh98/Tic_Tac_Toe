import React, {Component} from 'react'; 
import {Text, StyleSheet, Dimensions, View, ScrollView} from 'react-native';

const {width, height} = Dimensions.get('screen'); 

export default class WelcomePage extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <View style = {styles.container}>
                <Text>hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
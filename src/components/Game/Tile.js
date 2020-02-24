import React, { Component } from 'react';
import { Icon , Button} from 'native-base';
import { View, Text, Alert } from 'react-native';


export default class Tile extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        this.setState({xPos : this.props.x}); 
        this.setState({yPos : this.props.y});
    }

    state = {
        isUsed: false,
        icon: null,
        xPos: '',
        yPos: ''
    }
    
    tilePressed = (event) => {
        event.preventDefault(); 

        let x = this.state.xPos; 
        let y = this.state.yPos; 
        let player = global.currentPlayer; 

        if(player == 'X'){
            this.setState({icon: 'wine'});
            this.setState({isUsed : true});
            let position_hashed = x + y; 
            global.tileMap.set(position_hashed, player);
            global.currentPlayer = 'Y';
        } else {
            this.setState({icon: 'eye'});
            this.setState({isUsed : true});
            let position_hashed = x + y; 
            global.tileMap.set(position_hashed, player);

            global.currentPlayer = 'X';
        }

        
        let winner = this.checkWin(player); 
        if(winner == 'X'){
            Alert.alert("Wine won!");
        } else if(winner == 'Y'){
            Alert.alert("Eye won!")
        }
    }

    tileValid = () => {
        return global.tileMap.get(this.state.xPos+this.state.yPos);
    }

    checkWin = (player) => {  
        for (var i = 0; i < 3; i++) {
            let firstChar = global.tileMap.get(i+"0");
            let secondChar = global.tileMap.get(i+"1");
            let thirdChar = global.tileMap.get(i+"2");

            if(!firstChar||!secondChar||!thirdChar)
                break;
            
            if (firstChar == secondChar && secondChar == thirdChar) {
                return firstChar;
            }
        }

        for (var i = 0; i < 3; i++) {
            let firstChar = global.tileMap.get("0" + i);
            let secondChar = global.tileMap.get("1"+i);
            let thirdChar = global.tileMap.get("2"+i);
            
            if(!firstChar||!secondChar||!thirdChar)
                break;
            
            if (firstChar == secondChar && secondChar == thirdChar) {
                return firstChar;
            }
        }

        if(global.tileMap.get("00") && global.tileMap.get("11") && global.tileMap.get("22")){
            if (global.tileMap.get("00") == global.tileMap.get("11") == global.tileMap.get("22")) {
                return global.tileMap.get("00");
            }
        }

        if (global.tileMap.get("20") == global.tileMap.get("11") == global.tileMap.get("02")) {
            if(!global.tileMap.get("20") || !global.tileMap.get("11")|| !global.tileMap.get("02")){
            	return;
            }

            return global.tileMap.get("00");
        }            
    }

    renderTile = () => {
        if (this.tileValid()) {
            return (
                <View>
                    <Icon name={this.state.icon} />
                </View>
            )
        } else {
            return (
                <View>
                    <Button onPress={(e) => this.tilePressed(e)}></Button>
                </View>
            )
        }
    }
    render() {
        return (
            <View>
                {this.renderTile()}
            </View>
        )
    }
}


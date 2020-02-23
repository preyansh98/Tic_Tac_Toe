import React, { Component } from 'react';
import { Icon , Button} from 'native-base';
import { View, Text, TouchableHighlight } from 'react-native';


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
        console.log(player);
        if(player == 'X'){
            this.setState({icon: 'wine'});
            this.setState({isUsed : true});
            global.currentPlayer = 'Y';
        } else {
            this.setState({icon: 'eye'});
            this.setState({isUsed : true});
            global.currentPlayer = 'X';
        }

        this.renderTile(); 
    }

    renderTile = () => {
        if (this.state.isUsed) {
            return (
                <View>
                    <Icon name={this.state.icon} />
                </View>
            )
        } else {
            return (
                <View>
                    <Text>{this.state.xPos} and {this.state.yPos}</Text>
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


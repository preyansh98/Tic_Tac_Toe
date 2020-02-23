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

        if(player == 'X'){
            this.setState({icon: 'wine'});
            this.setState({isUsed : true});
            let position_hashed = x*3 + y; 
            global.tileMap.set(position_hashed, player);
            global.currentPlayer = 'Y';
        } else {
            this.setState({icon: 'eye'});
            this.setState({isUsed : true});
            let position_hashed = x*3 + y; 
            global.tileMap.set(position_hashed, player);

            global.currentPlayer = 'X';
        }

        this.checkWin(player, x, y); 
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


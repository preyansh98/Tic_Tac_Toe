import React, {Component} from 'react'; 

const Globals = () => {
    global.currentPlayer = "X";
    global.tileMap = new Map(); 
}

export default Globals;
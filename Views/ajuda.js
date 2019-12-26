import React, {Component} from 'react';
import { Text, View } from 'react-native';

class Hora extends Component{
    constructor(props){
        super(props),
        this.state = {Hora: new Date()},

        setInterval(
            () => {this.setState({Hora: new Date()})},
            1000
        )
    }

    render(){
        return(
        <Text>Hora: {this.state.Hora.toLocaleTimeString()}</Text>
        );
    }
}

export default class HoraApp extends Component{
    render(){
        return(
            <View style={{alignItems:'center',top:50}}>
                <Hora/>
            </View>
        );
    }
}
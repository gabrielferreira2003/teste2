import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { Image } from 'react-native';

class Home extends Component {
    render(){
        return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text> Você está na {this.props.name}!</Text>
                </View>
        );
    }
}
export default class HomeType extends Component{
    render() {
        return(
            <View style={{alignItems: 'center', top: 50}}>
                <Home name='Home1' />
                <Home name='Home2' />
                <Home name='Home3' />
            </View>
        );
    }
}
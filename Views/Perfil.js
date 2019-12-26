import React, {Component} from 'react';
import { Text, View, image} from 'react-native';

class Bielzim extends Component{
    render(){
        return(
            <View>
                <Text>Para quem tem fé, a vida nunca tem fim! Não tem fim!</Text>
            </View>
        );
    };
};

export default class Perfil extends Component {
    render(){
        return(
            <View style={{flex: 1, alignItems:'center', justifyContent: 'center',}}>
                <Bielzim/>
            </View>
        );
    }
}

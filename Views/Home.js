import React, {Component} from 'react';
import { Text, View} from 'react-native';

class Oficial extends Component{
    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Text>{this.props.nome} Vai chupar ou vai lamber?</Text>
                <Text>{this.props.nome} bora da uns pega?</Text>
            </View>
        );
    }
}

export default class Bielzim extends Component{
    render(){
        return(
            <View style={{alignItems:'center', top: 50}}>
                <Oficial nome='eai bb,'/>
            </View>
        );
    }
}

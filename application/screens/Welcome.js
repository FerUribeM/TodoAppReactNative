import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import * as firebase from 'firebase';

export default class Welcome extends Component {
    login(){

    }
    register(){

    }
    async facebook(){

    }
    render(){
        return(
            <BackgroundImage source={require('../../assets/images/image.png')}>
                <View style={{justifyContent : 'center', flex : 1}}>
                    <AppButton 
                        bgColor="rgba(111,38,74, 0.7)"
                        title="Entrar"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton 
                        bgColor="rgba(200,200,50, 0.7)"
                        title="Registrarme"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                    <AppButton 
                        bgColor="rgba(67,67,146, 0.7)"
                        title="Facebook"
                        action={this.facebook.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#FFF"
                    />
                </View>
            </BackgroundImage>
        );
    }

}

import React from 'react';
import {StackNavigator} from "react-navigation";
import WelcomeScreen from "../screens/Welcome";
import LoginScreen from "../screens/Login";

export default StackNavigator(
    {
        Welcome : {
            screen : WelcomeScreen
        },
        Login : {
            screen : LoginScreen
        },
    },
    {
        initialRouteName: 'Welcome',
        navigationOptions:{
            headerStyle :{
                backgroundColor : '#f4511e'
            },
            headerTitleStyle: {
                textAlign:'center', 
                flex:1 ,
                fontSize: 20,
                color : '#FFF',
                fontWeight: 'bold'
            }
        }
    }
)
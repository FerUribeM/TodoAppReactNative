import React from 'react';
import {Text} from 'react-native';
import BackgroundImage from './application/components/BackgroundImage';
import Welcome from './application/screens/Welcome';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig)


export default class App extends React.Component {
  render() {
    return (
      <Welcome/>
    );
  }
}

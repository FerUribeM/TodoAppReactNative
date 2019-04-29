import React from 'react';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';

import GestNavigation from './application/navigations/guest'

firebase.initializeApp(firebaseConfig)


export default class App extends React.Component {
  render() {
    return (
      <GestNavigation/>
    );
  }
}

import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


import Routes from './routes'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#1A237E' />

      <View style={{flex: 1 }}>
        <Routes />
      </View>

    </NavigationContainer>
  );
};





export default App;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Login, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;

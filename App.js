import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainNavigator from './src/navigation/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;

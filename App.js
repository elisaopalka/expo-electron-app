import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider} from 'react-redux';
// import store from './store/store';

import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import UselessTextInputMultiline from './component/UselessTextInputMultiline'
import Pressing from './component/Pressing'

//   import AddTask from './component/AddTask'

export default function App() {
  return (
    // <Provider store={store}>
    <ScrollView>
    <View style={styles.container}>
      <Text>This is my App</Text>
      <UselessTextInputMultiline/>
      <Pressing/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 4,
    borderColor: 'black',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

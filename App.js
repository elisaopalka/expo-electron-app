import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import UselessTextInputMultiline from './component/UselessTextInputMultiline'
import Pressing from './component/Pressing'

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>This is my App</Text>
      <UselessTextInputMultiline/>
      <Pressing/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
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

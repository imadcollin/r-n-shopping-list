import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Components/Header';
const App = () => {
  return (
    <View style={styles.root}>
      <Header title="Shopping List"></Header>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 60,
  },
});

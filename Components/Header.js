import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  root: {
    height: 70,
    padding: 15,
    backgroundColor: '#00008B',
  },
  text: {
    color: '#fff',
    fontSize: 35,
    textAlign: 'center',
  },
});

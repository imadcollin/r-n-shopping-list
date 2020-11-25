import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({item}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};
export default ListItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: '#000',
    padding: 10,
  },
  text: {
    color: '#000',
    fontSize: 35,
    textAlign: 'left',
    marginLeft: 10,
  },
});

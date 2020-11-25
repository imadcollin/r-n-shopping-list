import {useState, useEffect} from 'react';
import React, {PropTypes, Component} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './Components/Header';
import {itemList} from './Seeds/MockData';
import ListItem from './Components/ListItem';
const App = () => {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      await setItems(itemList);
    };
    getItems();
  }, []);
  return (
    <View style={styles.root}>
      <Header title="Shopping List"></Header>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item}></ListItem>}></FlatList>
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

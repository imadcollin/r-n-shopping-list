import {useState, useEffect} from 'react';
import React, {PropTypes, Component} from 'react';

import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import Header from './Components/Header';
import {itemList} from './Seeds/MockData';
import ItemView from './Components/ItemView';
import ItemsList from './Components/ItemsList';
import CreateItem from './Components/CreateItem';
import {Button} from 'react-native-elements';
const App = () => {
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);
  const [createTile, setCreateTitle] = useState('Create Item');
  useEffect(() => {
    const getItems = async () => {
      await setItems(itemList);
    };
    getItems();
  }, []);

  addItem = (name, price) => {
    const lastItemId = items.length;
    const item = {
      id: lastItemId + 1,
      name: name,
      price: price,
    };
    setItems((state) => {
      return [...state, item];
    });
    name = '';
  };
  removeItem = (id) => {
    setItems((state) => {
      return state.filter((item) => item.id != id);
    });
  };
  handleShow = () => {
    setShow(!show);
    setCreateTitle(show ? 'Create Item' : 'Close input section');
  };
  return (
    <View style={styles.root}>
      <Header title="Shopping List"></Header>
      {show ? <CreateItem addItem={addItem}></CreateItem> : null}
      <ItemsList items={items}></ItemsList>

      <Button title={createTile} onPress={() => handleShow()} />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 60,
  },
});

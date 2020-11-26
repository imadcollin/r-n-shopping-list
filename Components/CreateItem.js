import React from 'react';
import {useState} from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

const AddItem = ({addItem}) => {
  const [name, setName] = useState(' ');
  const [price, setPrice] = useState(' ');

  handleCreate = () => {
    addItem(name, price);
    setName('');
    setPrice('');
  };
  return (
    <View style={styles.root}>
      <Input
        placeholder="Type something...."
        label="Item Name"
        onChangeText={(name) => setName(name)}
        defaultValue={name}
      />

      <Input
        placeholder="Type something...."
        label="Item Price"
        onChangeText={(price) => setPrice(price)}
        defaultValue={price}
      />

      <Button
        icon={<Icon name="plus" size={15} color="white" />}
        title="Add Item"
        onPress={() => handleCreate()}
      />
    </View>
  );
};
export default AddItem;

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
  },
  text: {
    color: '#000',
    fontSize: 35,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

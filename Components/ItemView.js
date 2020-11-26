import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';

const ItemView = ({item, index, removeItem}) => {
  return (
    <View style={styles.root}>
      <Text>{index}.</Text>
      <Text>{item.name}</Text>
      <Text>{item.price}€</Text>

      <Icon
        color="red"
        name="ios-close-circle"
        type="ionicon"
        size={35}
        onPress={() => removeItem(item.id)}
      />
    </View>
  );
};
export default ItemView;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 14,
    borderBottomWidth: 5,
  },
  text: {
    margin: 0,
    textAlign: 'right',
  },
});

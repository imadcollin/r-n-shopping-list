import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native';
import ItemView from './ItemView';
const ItemsList = ({items}) => {
  return (
    <View style={styles.root}>
      <FlatList
        style={(flex = 1)}
        data={items}
        renderItem={({item, index}) => (
          <ItemView
            keyExtractor={(item.id, toString())}
            item={item}
            index={index + 1}
            removeItem={removeItem}
            addItem={addItem}></ItemView>
        )}></FlatList>
    </View>
  );
};
export default ItemsList;

const styles = StyleSheet.create({
  root: {
    // height: 70,
    // padding: 15,
    // marginTop: 60,
  },
  text: {
    color: '#000',
    fontSize: 35,
    textAlign: 'center',
  },
});

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBtnMin, ICBtnPlus} from '../../../assets';

const Counter = ({count}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICBtnPlus />
      </TouchableOpacity>
      <Text style={styles.num}>{count}</Text>
      <TouchableOpacity>
        <ICBtnMin />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  num: {
    marginHorizontal: 8,
  },
});

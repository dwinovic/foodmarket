import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

const ItemValue = ({label, value, textGreen}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelName}>{label}</Text>
      <Text style={styles.value(textGreen)}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  labelName: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.gray,
  },
  value: textGreen => ({
    fontFamily: textGreen ? 'Poppins-Medium' : 'Poppins-Regular',
    fontSize: 14,
    color: textGreen ? colors.text.green : colors.text.black,
  }),
});

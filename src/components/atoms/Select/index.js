import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors} from '../../../utils';

const index = ({label, value, onSelectChange}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={itemValue => onSelectChange(itemValue)}>
          <Picker.Item label="Madiun" value="Madiun" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Makasar" value="Makasar" />
          <Picker.Item label="Denpasar" value="Denpasar" />
        </Picker>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: colors.border.primary,
    color: colors.text.gray,
    borderRadius: 8,
  },
});

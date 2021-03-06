import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({label, value, secure, placeholder, ...setProps}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secure ? true : false}
        {...setProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    padding: 10,
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: colors.border.primary,
    color: colors.text.gray,
    fontSize: 16,
    borderRadius: 8,
  },
});

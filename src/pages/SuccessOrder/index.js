import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Driver} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {colors} from '../../utils';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Image source={Driver} />
        <Text style={styles.heading}>You've Made Order</Text>
        <Text style={styles.desc}>
          Just stay at home while we are preparing your best foods
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.btnItem}>
          <Button
            title="Order Other Foods"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
        <Gap height={16} />
        <View style={styles.btnItem}>
          <Button
            title="View My Order"
            type="secondary"
            onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
          />
        </View>
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 72,
    alignItems: 'center',
    marginVertical: 72,
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 6,
    textAlign: 'center',
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    fontSize: 14,
    color: colors.text.gray,
  },
  buttonWrapper: {
    marginTop: 30,
    flex: 1,
    width: '80%',
  },
  btnItem: {
    height: 45,
  },
});

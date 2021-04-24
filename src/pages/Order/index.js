import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Driver, ILOrder} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {colors} from '../../utils';
import {
  AvatarWrapper,
  Header,
  OrderTabSection,
} from '../../components/molecules';

const EmptyOrder = () => {
  return (
    <View style={styles.content}>
      <Image source={ILOrder} />
      <Text style={styles.heading}>Ouch! Hungry</Text>
      <Text style={styles.desc}>
        Seems like you have not ordered any food yet
      </Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.btnItem}>
          <Button title="Find Foods" />
        </View>
      </View>
    </View>
  );
};

const HaveOrder = () => {
  return (
    <>
      <Header textHeading="Your Orders" desc="Wait for the best meal" />
      <OrderTabSection />
    </>
  );
};

const Order = () => {
  const [isEmpty] = useState(false);

  return (
    <View style={styles.page}>{isEmpty ? <EmptyOrder /> : <HaveOrder />}</View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 80,
    paddingVertical: 90,
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

import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header} from '../../components/molecules';
import PaymentProduct from '../PaymentProduct';

const OrderInProgress = () => {
  return (
    <ScrollView style={styles.page}>
      <PaymentProduct orderStatus />
    </ScrollView>
  );
};

export default OrderInProgress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

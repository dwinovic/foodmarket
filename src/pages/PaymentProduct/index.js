import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {DMMenu2} from '../../assets';
import {Button, ItemValue, ListMenuItem} from '../../components/atoms';
import {AvatarWrapper, Header} from '../../components/molecules';
import {colors} from '../../utils';

const PaymentProduct = ({navigation, orderStatus}) => {
  return (
    <View style={styles.page}>
      <Header
        textHeading="Payment"
        desc="You deserve better meal"
        onBack
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {/* Item Oredered */}
            <View style={styles.section}>
              <Text style={styles.labelSection}>Item Ordered</Text>
              <ListMenuItem
                image={DMMenu2}
                titleMenu="Pecel Dua"
                price="IDR. 25.000"
                item="2 Item"
              />
            </View>

            {/* Details Transaction */}
            <View style={styles.section}>
              <Text style={styles.labelSection}>Details Transaction</Text>
              <ItemValue label="Cherry Healthy" value="IDR. 58.000" />
              <ItemValue label="Driver" value="IDR 5.000" />
              <ItemValue label="Tax 10%" value="IDR 500" />
              <ItemValue label="Total Price" value="IDR 61.500" textGreen />
            </View>

            {/* Deliver To */}
            <View style={styles.section}>
              <Text style={styles.labelSection}>Details Transaction</Text>
              <ItemValue label="Name" value="Jessica" />
              <ItemValue label="Phone No." value="0822 0819 9688" />
              <ItemValue label="Address" value="Bumi Mas 01" />
              <ItemValue label="House No." value="No. 76" />
              <ItemValue label="City" value="Madiun" />
            </View>
          </View>

          {/* Start: Order Status */}
          {orderStatus && (
            <View style={styles.section}>
              <Text style={styles.labelSection}>Order Status</Text>
              <ItemValue label="#FM209391" value="Paid" textGreen />
            </View>
          )}
          {/* End: Order Status */}
          {/* Button */}
          <View style={styles.btnWrapper}>
            {orderStatus ? (
              <Button
                type="danger"
                title="Cancel Now"
                onPress={() => navigation.replace('SuccessOrder')}
              />
            ) : (
              <Button
                title="Checkout Now"
                onPress={() => navigation.replace('SuccessOrder')}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PaymentProduct;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  labelSection: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.text.black,
    marginBottom: 12,
  },
  section: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  btnWrapper: {
    marginTop: 24,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white',
  },
});

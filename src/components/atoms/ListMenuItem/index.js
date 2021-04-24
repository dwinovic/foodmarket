import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';
import Rating from '../Rating';

const RatingComponent = () => {
  return (
    <View style={styles.rating}>
      <Rating rating={3} />
    </View>
  );
};

const ItemComponent = ({totalItem, date, status}) => {
  const DateAndStatus = () => {
    return (
      <>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.status}>{status}</Text>
      </>
    );
  };
  return (
    <View style={styles.itemWrapper}>
      {totalItem && <Text style={styles.totalItem}>{totalItem}</Text>}
      {date && status && <DateAndStatus />}
    </View>
  );
};

const ListMenuItem = ({
  titleMenu,
  image,
  price,
  onPress,
  rating,
  totalItem,
  type,
  date,
  status,
}) => {
  const ItemChecking = () => {
    switch (type) {
      case 'item-product':
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.desc}>
              <Text style={styles.title}>{titleMenu}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <RatingComponent />
          </>
        );
      case 'item-checkout':
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.desc}>
              <Text style={styles.title}>{titleMenu}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            <ItemComponent totalItem={totalItem} />
          </>
        );
      case 'item-order':
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.desc}>
              <Text style={styles.title}>{titleMenu}</Text>
              <Text style={styles.price}>
                {totalItem} | {price}
              </Text>
            </View>
            <ItemComponent date={date} status={status} />
          </>
        );
      default:
        return (
          <>
            <Image source={image} style={styles.image} />
            <View style={styles.desc}>
              <Text style={styles.title}>{titleMenu}</Text>
              <Text style={styles.price}>{price}</Text>
            </View>
            {rating && !totalItem && <RatingComponent />}
            {totalItem && !rating && <ItemComponent totalItem={totalItem} />}
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container}>
        <ItemChecking />
      </View>
    </TouchableOpacity>
  );
};

export default ListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  desc: {
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 12,
  },
  title: {
    fontFamily: 'Poppins-Regular',
    color: colors.text.black,
    fontSize: 16,
  },
  price: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: colors.text.gray,
  },
  rating: {
    justifyContent: 'center',
  },
  totalItem: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.text.gray,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.gray,
  },
  status: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.red,
  },
});

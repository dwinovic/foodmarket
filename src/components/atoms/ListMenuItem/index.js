import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';
import Rating from '../Rating';

const ListMenuItem = ({titleMenu, image, price, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <View style={styles.desc}>
                    <Text style={styles.title}>{titleMenu}</Text>
                    <Text style={styles.price}>{price}</Text>
                </View>
                <View style={styles.rating}>
                    <Rating rating={3} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ListMenuItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'center',
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
});

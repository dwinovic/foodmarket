import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICStarRating, MenuPecel} from '../../../assets';
import {colors} from '../../../utils';
import Rating from '../Rating';

const CardMenu = ({menuItem, rating, image}) => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.wrapper}>
                <Image source={image} style={styles.menuImg} />
                <View style={styles.content}>
                    <Text style={styles.menuItem}>{menuItem}</Text>
                    <Rating />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CardMenu;

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 8,
        width: 200,
        alignSelf: 'center',
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    content: {
        padding: 12,
    },
    menuItem: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: colors.text.black,
        letterSpacing: 1,
    },

    menuImg: {
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
});

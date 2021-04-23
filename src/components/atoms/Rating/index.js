import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICStarRating} from '../../../assets';
import {colors} from '../../../utils';

const Rating = ({rating}) => {
    return (
        <View style={styles.ratingWrapper}>
            <ICStarRating />
            <ICStarRating />
            <ICStarRating />
            <ICStarRating />
            <Text style={styles.ratingNum}>{rating}</Text>
        </View>
    );
};

export default Rating;

const styles = StyleSheet.create({
    ratingWrapper: {
        flexDirection: 'row',
    },
    ratingNum: {
        marginLeft: 4,
        fontSize: 14,
        color: colors.text.gray,
    },
});

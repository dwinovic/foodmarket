import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CircleFrame} from '../../../assets';
import {colors} from '../../../utils';

const AvatarWrapper = () => {
    return (
        <TouchableOpacity style={styles.avatarWrapper}>
            <CircleFrame />
            <View style={styles.avatar}>
                <Text style={styles.textAvatar}>Add Photo</Text>
            </View>
        </TouchableOpacity>
    );
};

export default AvatarWrapper;

const styles = StyleSheet.create({
    avatarWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        backgroundColor: colors.avatar.default,
        width: 90,
        height: 90,
        borderRadius: 45,
        position: 'absolute',
        opacity: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAvatar: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: colors.text.black,
    },
});

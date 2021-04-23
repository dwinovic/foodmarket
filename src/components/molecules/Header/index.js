import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {ICBack, ProfileDummyUser} from '../../../assets';
import {colors} from '../../../utils';

const Header = ({textHeading, desc, onBack, onPress, profile}) => {
    const IconBack = () => {
        return (
            <TouchableOpacity style={styles.btnWrapper} onPress={onPress}>
                <ICBack />
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container(profile)}>
            {onBack && <IconBack />}
            <View>
                <Text style={styles.heading}>{textHeading}</Text>
                <Text style={styles.paragraph}>{desc}</Text>
            </View>
            {profile && (
                <View>
                    <Image style={styles.avatar} source={ProfileDummyUser} />
                </View>
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: profile => ({
        paddingHorizontal: 24,
        paddingVertical: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: profile ? 'space-between' : null,
    }),
    heading: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: colors.text.black,
    },
    paragraph: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: colors.text.gray,
    },
    btnWrapper: {
        padding: 10,
        paddingLeft: 0,
        marginRight: 10,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 8,
    },
});

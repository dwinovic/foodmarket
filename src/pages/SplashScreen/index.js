import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICLogo} from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            return navigation.replace('Login');
        }, 3000);
    });

    return (
        <View style={styles.page}>
            <ICLogo />
            <Text style={styles.heading}>Food Market</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FFC700',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        marginTop: 30,
        color: '#020202',
        fontFamily: 'Poppins-Medium',
    },
});

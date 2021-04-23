import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILSuccessSignUp} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {colors} from '../../utils';

const SuccessSignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ILSuccessSignUp />
                <Gap height={16} />
                <Text style={styles.heading}>Yeay! Completed</Text>
                <Gap height={16} />
                <Text style={styles.desc}>
                    Now you are able to order some foods as a self-reward
                </Text>
            </View>
            <View>
                <Button
                    title="Find Foods"
                    onPress={() => navigation.replace('MainApp')}
                />
                <Gap height={32} />
            </View>
        </View>
    );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    heading: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: colors.text.black,
    },
    desc: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        color: colors.text.gray,
        fontSize: 14,
    },
});

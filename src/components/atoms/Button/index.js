import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils';

const Button = ({title, onPress, type}) => {
    const CheckButton = () => {
        if (type) {
            if (type === 'secondary') {
                return (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onPress}
                        style={styles.btnDanger}>
                        <Text style={styles.titleDanger}>{title}</Text>
                    </TouchableOpacity>
                );
            }
            if (type === 'danger') {
                return (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={onPress}
                        style={styles.btnSecondary}>
                        <Text style={styles.title}>{title}</Text>
                    </TouchableOpacity>
                );
            }
        }
        return (
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
                activeOpacity={0.8}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        );
    };

    return <CheckButton />;
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.button.primary,
        // paddingHorizontal: 133,
        // paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 8,
    },
    btnDanger: {
        backgroundColor: colors.button.danger,
        // paddingHorizontal: 83,
        // paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 8,
    },
    btnSecondary: {
        backgroundColor: colors.button.secondary,
        // paddingHorizontal: 83,
        // paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 8,
    },
    title: {
        color: colors.text.black,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        letterSpacing: 1,
    },
    titleDanger: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        letterSpacing: 1,
    },
});

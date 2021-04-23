import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors} from '../../../utils';

const index = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                // selectedValue={selectedLanguage}
                // onValueChange={(itemValue, itemIndex) =>
                //     setSelectedLanguage(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        fontFamily: 'Poppins-Regular',
        borderWidth: 1,
        borderColor: colors.border.primary,
        color: colors.text.gray,
        borderRadius: 8,
    },
});

import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBtnMin, ICBtnPlus} from '../../../assets';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <ICBtnPlus />
            </TouchableOpacity>
            <Text style={styles.num}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count - 1)}>
                <ICBtnMin />
            </TouchableOpacity>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    num: {
        marginHorizontal: 8,
    },
});

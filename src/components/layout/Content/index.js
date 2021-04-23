import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Content = ({children, flex, noPadding}) => {
    return <View style={styles.content(flex, noPadding)}>{children}</View>;
};

export default Content;

const styles = StyleSheet.create({
    content: (flex, noPadding) => ({
        padding: noPadding ? 0 : 24,
        backgroundColor: 'yellow',
        marginTop: -24,
        flex: flex ? 1 : null,
    }),
});

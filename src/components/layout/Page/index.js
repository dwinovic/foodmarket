import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Page = ({children}) => {
    return (
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {children}
            </ScrollView>
        </View>
    );
};

export default Page;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
});

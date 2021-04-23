import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
    ICHomeActive,
    ICHomeOff,
    ICOrderActive,
    ICOrderOff,
    ICProfileActive,
    ICProfileOff,
} from '../../../assets';

const Icon = ({label, focus}) => {
    switch (label) {
        case 'Home':
            return focus ? <ICHomeActive /> : <ICHomeOff />;
        case 'Order':
            return focus ? <ICOrderActive /> : <ICOrderOff />;
        case 'Profile':
            return focus ? <ICProfileActive /> : <ICProfileOff />;
        default:
            return <ICOrderActive />;
    }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.icon}
                        activeOpacity={0.5}>
                        <Icon label={label} focus={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavigator;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: 13,
        paddingTop: 15,
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        backgroundColor: 'white',
    },
    icon: {},
});

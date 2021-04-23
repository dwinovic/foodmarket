import React, {useState} from 'react';
import {StyleSheet, Text, View, useWindowDimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {DMMenu1, DMMenu2, DMMenu3, MenuPecel} from '../../../assets';
import {ListMenuItem} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const NewTaste = () => {
    const navigation = useNavigation();
    return (
        <View style={{marginHorizontal: 14, marginVertical: 16}}>
            <ListMenuItem
                image={DMMenu2}
                price="IDR 420.000"
                titleMenu="Ayam"
                onPress={() => navigation.navigate('DetailFood')}
            />
            <ListMenuItem
                image={DMMenu3}
                price="IDR 420.000"
                titleMenu="Ayam"
            />
            <ListMenuItem
                image={MenuPecel}
                price="IDR 420.000"
                titleMenu="Ayam"
            />
        </View>
    );
};

const Popular = () => {
    const navigation = useNavigation();

    return (
        <View style={{marginHorizontal: 14, marginVertical: 16}}>
            <ListMenuItem
                image={DMMenu2}
                price="IDR 420.000"
                titleMenu="Ayam"
            />
            <ListMenuItem
                image={MenuPecel}
                price="IDR 42.000"
                titleMenu="Pecel"
            />
        </View>
    );
};

const Recommended = () => {
    const navigation = useNavigation();

    return (
        <View style={{marginHorizontal: 14, marginVertical: 16}}>
            <ListMenuItem
                image={DMMenu3}
                price="IDR 420.000"
                titleMenu="Ayam"
            />
        </View>
    );
};

const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
});

const renderTabBar = props => (
    <TabBar
        {...props}
        tabStyle={styles.tabStyle}
        indicatorStyle={styles.tabIndicatorStyle}
        style={styles.tabBarstyle}
        renderLabel={({route, focused, color}) => (
            <Text style={styles.tabTextLabel(focused)}>{route.title}</Text>
        )}
    />
);

const HomeTabSection = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {key: '1', title: 'New Taste'},
        {key: '2', title: 'Popular'},
        {key: '3', title: 'Recommended'},
    ]);

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            renderTabBar={renderTabBar}
            style={{backgroundColor: 'white'}}
        />
    );
};

export default HomeTabSection;

const styles = StyleSheet.create({
    tabStyle: {width: 'auto'},
    tabIndicatorStyle: {
        height: 3,
        width: 0.7,
        backgroundColor: '#020202',
    },
    tabBarstyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 2,
    },
    tabTextLabel: focused => ({
        fontFamily: 'Poppins-Medium',
        color: focused ? '#020202' : '#8D92A3',
    }),
});

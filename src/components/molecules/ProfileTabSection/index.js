import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ICNext} from '../../../assets';
import {colors} from '../../../utils';

const ListItem = ({label}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.listItemsWrapper}>
      <View style={styles.list}>
        <Text style={styles.label}>{label}</Text>
        <View>
          <ICNext />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Account = () => {
  const navigation = useNavigation();
  return (
    <>
      <ListItem label="Edit Profile" />
      <ListItem label="Home Address" />
      <ListItem label="Security" />
      <ListItem label="Payments" />
    </>
  );
};

const FoodMarket = () => {
  const navigation = useNavigation();

  return (
    <>
      <ListItem label="Rate App" />
      <ListItem label="Help Center" />
      <ListItem label="Privacy and Policy" />
      <ListItem label="Terms & Conditions" />
    </>
  );
};

const renderScene = SceneMap({
  1: Account,
  2: FoodMarket,
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

const ProfileTabSection = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'Food Market'},
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

export default ProfileTabSection;

const styles = StyleSheet.create({
  tabStyle: {width: 'auto', paddingHorizontal: 24},
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
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.text.black,
  },
  listItemsWrapper: {marginHorizontal: 14, marginVertical: 10},
});

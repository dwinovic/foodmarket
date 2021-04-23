import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {DMMenu1, DMMenu2, DMMenu3, MenuPecel} from '../../assets';
import {CardMenu, Gap, ListMenuItem} from '../../components/atoms';
import {HomeTabSection} from '../../components/molecules';
import Header from '../../components/molecules/Header';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <Header textHeading="FoodMarket" desc="Let’s get some foods" profile />
        <View style={styles.content}>
          <View style={{flex: 1}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.foodCardContainer}>
                <Gap width={24} />
                <CardMenu
                  menuItem="Pecel Madiun"
                  rating="4.5"
                  image={MenuPecel}
                />
                <Gap width={16} />
                <CardMenu
                  menuItem="Pecel Madiun"
                  rating="4.5"
                  image={MenuPecel}
                />
                <Gap width={24} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.tabContainer}>
            <HomeTabSection />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
    height: 300,
  },
});

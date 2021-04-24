import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {UserProfile} from '../../assets';
import {
  AvatarWrapper,
  Header,
  ProfileTabSection,
} from '../../components/molecules';
import {colors} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileHeader}>
        <AvatarWrapper profile={UserProfile} />
        <Text style={styles.username}>Dwinovic</Text>
        <Text style={styles.email}>dwinovic@gmail.com</Text>
      </View>
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileHeader: {
    padding: 26,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  username: {
    fontFamily: 'Poppins-Medium',
    marginTop: 16,
    letterSpacing: 1,
    color: colors.text.black,
    fontSize: 18,
  },
  email: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: colors.text.gray,
    letterSpacing: 1,
  },
});

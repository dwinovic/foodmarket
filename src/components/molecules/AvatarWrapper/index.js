import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CircleFrame, UserNullPhoto} from '../../../assets';
import {colors} from '../../../utils';

const AvatarWrapper = ({profile, onPress}) => {
  return (
    <TouchableOpacity style={styles.avatarWrapper} onPress={onPress}>
      <CircleFrame />
      <View style={styles.avatar}>
        {profile ? (
          <Image source={{uri: profile}} style={styles.avatar} />
        ) : (
          <ImageBackground source={UserNullPhoto} style={styles.avatar}>
            <Text style={styles.textAvatar}>Add Photo</Text>
          </ImageBackground>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AvatarWrapper;

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAvatar: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.black,
  },
});

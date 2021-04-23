import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, FormInput, Gap} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {AvatarWrapper, Header} from '../../components/molecules';

const SignUp = ({navigation}) => {
  return (
    <LayoutPage>
      <Header
        textHeading="Sign Up"
        desc="Register and Eat"
        onBack
        onPress={() => navigation.goBack()}
      />
      <LayoutContent>
        <AvatarWrapper />
        <Gap height={16} />
        <FormInput label="Full Name" />
        <Gap height={16} />
        <FormInput label="Email" />
        <Gap height={16} />
        <FormInput label="Password" secure />
        <Gap height={24} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
        <Gap height={24} />
      </LayoutContent>
    </LayoutPage>
  );
};

export default SignUp;

const styles = StyleSheet.create({});

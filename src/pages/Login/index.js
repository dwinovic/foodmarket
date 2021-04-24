import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, FormInput} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {Header} from '../../components/molecules';

const Login = ({navigation}) => {
  return (
    <LayoutPage>
      <Header textHeading="Sign In" desc="Find your best ever meal" />
      <LayoutContent>
        <FormInput label="Email" />
        <Gap height={16} />
        <FormInput label="Password" secure />
        <Gap height={24} />
        <Button title="Sign In" onPress={() => navigation.navigate('SignUp')} />
        <Gap height={12} />
        <Button title="Create New Account" type="secondary" />
        {/* Button: Register */}
        <Gap height={24} />
      </LayoutContent>
    </LayoutPage>
  );
};

export default Login;

const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Button, FormInput, Gap} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {Header} from '../../components/molecules';
import {useForm} from '../../utils';
import Axios from 'axios';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const onSubmit = () => {
    console.info(form);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        // console.log(err);
      });

    // navigation.navigate('SignUp');
  };
  return (
    <LayoutPage>
      <Header textHeading="Sign In" desc="Find your best ever meal" />
      <LayoutContent>
        <FormInput
          label="Email"
          onChangeText={value => setForm('email', value)}
          value={form.email}
        />
        <Gap height={16} />
        <FormInput
          label="Password"
          secure
          onChangeText={value => setForm('password', value)}
          value={form.password}
        />
        <Gap height={24} />
        <Button title="Sign In" onPress={onSubmit} />
        <Gap height={12} />
        <Button
          title="Create New Account"
          type="secondary"
          onPress={() => navigation.navigate('SignUp')}
        />
        {/* Button: Register */}
        <Gap height={24} />
      </LayoutContent>
    </LayoutPage>
  );
};

export default Login;

const styles = StyleSheet.create({});

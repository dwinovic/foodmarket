import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, FormInput, Gap} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {AvatarWrapper, Header} from '../../components/molecules';
import {useForm} from '../../utils';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log(form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

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
        <FormInput
          label="Full Name"
          value={form.name}
          onChangeText={value => setForm('name', value)}
        />
        <Gap height={16} />
        <FormInput
          label="Email"
          value={form.email}
          onChangeText={value => setForm('email', value)}
        />
        <Gap height={16} />
        <FormInput
          label="Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secure
        />
        <Gap height={24} />
        <Button title="Continue" onPress={onSubmit} />
        <Gap height={24} />
      </LayoutContent>
    </LayoutPage>
  );
};

export default SignUp;

const styles = StyleSheet.create({});

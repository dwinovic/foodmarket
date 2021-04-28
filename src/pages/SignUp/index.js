import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Button, FormInput, Gap} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {AvatarWrapper, Header} from '../../components/molecules';
import {showMessage, useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');

  const dispatch = useDispatch();

  const addPhoto = () => {
    launchImageLibrary(
      {maxWidth: 250, maxHeight: 250, quality: 0.5},
      response => {
        if (response.didCancel || response.error) {
          showMessage('Anda tidak memilih photo');
        } else {
          const dataImage = {
            fileName: response.fileName,
            type: response.type,
            uri: response.uri,
          };
          setPhoto(dataImage.uri);
          console.log(photo);
        }
      },
    );
  };

  const onSubmit = () => {
    // console.log(form);
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
        <AvatarWrapper onPress={addPhoto} profile={photo} />
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

import Axios from 'axios';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, FormInput, Gap, Select} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {Header} from '../../components/molecules';
import {showMessage, useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
  });

  const registerReducer = useSelector(state => state.registerReducer);
  const dispatch = useDispatch();

  const onSubmit = () => {
    // console.log(form);
    dispatch({type: 'SET_LOADING', value: true});
    const data = {
      ...form,
      ...registerReducer,
    };
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        showMessage(res?.response?.data?.message, 'success');
        navigation.replace('SuccessSignUp');
        dispatch({type: 'SET_LOADING', value: false});
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        showMessage(err?.response?.data?.message);
      });
  };

  return (
    <LayoutPage>
      <Header
        textHeading="Address"
        desc="Make sure it’s valid"
        onPress={() => navigation.goBack()}
        onBack
      />
      <LayoutContent>
        <FormInput
          label="Phone No"
          placeholder="Type your phone number"
          value={form.phoneNumber}
          onChangeText={value => setForm('phoneNumber', value)}
        />
        <Gap height={16} />
        <FormInput
          label="Address"
          placeholder="Type your address"
          value={form.address}
          onChangeText={value => setForm('address', value)}
        />
        <Gap height={16} />
        <FormInput
          label="House No"
          placeholder="Type your house number"
          value={form.houseNumber}
          onChangeText={value => setForm('houseNumber', value)}
        />
        <Gap height={16} />
        <Select
          label="City"
          value={form.city}
          onSelectChange={value => setForm('city', value)}
        />
        <Gap height={24} />
        <Button title="Continue" onPress={onSubmit} />
      </LayoutContent>
    </LayoutPage>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({});

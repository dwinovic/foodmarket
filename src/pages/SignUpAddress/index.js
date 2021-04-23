import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, FormInput, Gap, Select} from '../../components/atoms';
import {LayoutContent, LayoutPage} from '../../components/layout';
import {Header} from '../../components/molecules';

const SignUpAddress = ({navigation}) => {
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
                />
                <Gap height={16} />
                <FormInput label="Address" placeholder="Type your address" />
                <Gap height={16} />
                <FormInput
                    label="House No"
                    placeholder="Type your house number"
                />
                <Gap height={16} />
                <Select label="City" />
                <Gap height={24} />
                <Button
                    title="Continue"
                    onPress={() => navigation.replace('SuccessSignUp')}
                />
            </LayoutContent>
        </LayoutPage>
    );
};

export default SignUpAddress;

const styles = StyleSheet.create({});

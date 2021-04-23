import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
    Login,
    SplashScreen,
    SignUp,
    SignUpAddress,
    SuccessSignUp,
    Home,
    Order,
    Profile,
    DetailFood,
} from '../pages';
import {BottomNavigator} from '../components/molecules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="DetailFood">
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUpAddress"
                component={SignUpAddress}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SuccessSignUp"
                component={SuccessSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="DetailFood"
                component={DetailFood}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;

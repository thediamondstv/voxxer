import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import React from 'react';

import ChatScreen from '../screens/ChatScreen';
import ChannelsScreen from '../screens/ChannelsScreen';
import ServersScreen from '../screens/ServersScreen';
import SignInScreen from '../screens/SignInScreen';
import { RootStackParamList } from './types';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Servers" component={ServersScreen} options={{ title: 'Servers' }} />
      <Stack.Screen name="Channels" component={ChannelsScreen} options={{ title: 'Channels' }} />
      <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

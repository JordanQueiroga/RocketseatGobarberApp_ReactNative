import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import SelectProvaider from './pages/New/SelectProvaider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const New = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerTransparent: true,
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <Stack.Screen
      name="SelectProvaider"
      component={SelectProvaider}
      options={SelectProvaider.navigationOptions}
    />
    <Stack.Screen
      name="SelectDateTime"
      component={SelectDateTime}
      options={SelectDateTime.navigationOptions}
    />

    <Stack.Screen
      name="Confirm"
      component={Confirm}
      options={Confirm.navigationOptions}
    />
  </Stack.Navigator>
);

function Routes({ signedIn }) {
  return (
    <NavigationContainer>
      {!signedIn ? (
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            headerBackTitle: false,
            headerStyle: {
              backgroundColor: '#7159c1',
            },
          }}
        >
          <Stack.Screen
            name="SignIn"
            options={{ title: 'SignIn' }}
            component={SignIn}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
            showIcon: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            options={{
              title: 'Agendamentos',
              tabBarIcon: ({ color }) => (
                <Icon name="event" size={20} color={color} />
              ),
            }}
            component={Dashboard}
          />

          <Tab.Screen
            name="new"
            component={New}
            options={{
              title: 'Agendar',
              tabBarLabel: 'Agendar',
              tabBarVisible: false,
              tabBarIcon: () => (
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color="rgba(255,255,255,0.6)"
                />
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            options={Profile.navigationOptions}
            component={Profile}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

Routes.defaultProps = {
  signedIn: false,
};

export default Routes;

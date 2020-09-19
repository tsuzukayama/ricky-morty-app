import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabCharacterParamList, TabLocationParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Character"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Character"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Location"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabCharacterStack = createStackNavigator<TabCharacterParamList>();

function TabOneNavigator() {
  return (
    <TabCharacterStack.Navigator>
      <TabCharacterStack.Screen
        name="TabCharacterScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Character' }}
      />
    </TabCharacterStack.Navigator>
  );
}

const TabLocationStack = createStackNavigator<TabLocationParamList>();

function TabTwoNavigator() {
  return (
    <TabLocationStack.Navigator>
      <TabLocationStack.Screen
        name="TabLocationScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Location' }}
      />
    </TabLocationStack.Navigator>
  );
}

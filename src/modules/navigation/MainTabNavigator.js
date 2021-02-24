import * as React from 'react';
import {
  Text, View, StyleSheet, Platform, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import normalize from '@helpers/NormalizedText';
import { colors } from '../../styles';

import tabNavigationData from './tabNavigationData';

const { width } = Dimensions.get('screen');

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ style: { height: Platform.OS === 'ios' ? 90 : 50 } }}>
      {tabNavigationData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={styles.tabBarItemContainer}>
                {/* <Image
                  resizeMode="contain"
                  source={item.icon}
                  style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
                /> */}
                {/* { (focused && item.name !== 'Notifications') && <Icon
                  name={item.icon}
                  size={24}
                  style={[
                    styles.tabBarIcon, focused && styles.tabBarIconFocused,
                  ]}
                /> }
                { focused && item.name == 'Notifications' && <LottieView
                  style={{ width: 30, height: 30, borderRadius: 15 }} 
                  source={ require('@lottie/bell.json')}
                  autoPlay
                  loop
                  // enableMergePathsAndroidForKitKatAndAbove
                /> } */}
                <Icon
                  name={item.icon}
                  size={26}
                  style={[
                    styles.tabBarIcon, focused && styles.tabBarIconFocused,
                  ]}
                />
              </View>
            ),
            tabBarLabel: ({ focused }) => <Text style={{ fontSize: width > 480 ? normalize(12) : normalize(10), color: focused ? '#02b14f' : colors.lightGray, marginBottom: 5 }}>{item.name}</Text>,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
    bottom: Platform.OS === 'ios' ? -5 : -3,
  },
  tabBarIcon: {
    width: 26,
    height: 26,
    color: colors.lightGray
  },
  tabBarIconFocused: {
    // tintColor: colors.primary,
    color: '#02b14f'
  },
});

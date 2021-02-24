import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { Image, StyleSheet, View } from 'react-native';

import { StackNavigationData } from './stackNavigationData';

import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { getAuth, setAppOpened } from './../AppState';

const Stack = createStackNavigator();

function NavigatorView(props) {

  const headerLeftComponentMenu = () => (
    <View/>
  );

  return (
    <Stack.Navigator screenOptions={{}}>
    
    {StackNavigationData.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={ 
            item.headerHide ? { 
              headerShown: !item.headerHide,
              gestureEnabled: true,
              gestureDirection: item.isDetail ? 'horizontal' : 'vertical',
              cardStyleInterpolator: ({ current, layouts }) => {
                return {
                  cardStyle: { 
                    transform: item.isDetail ? [
                      {
                        translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                        }),
                      },
                    ] :
                    [
                      {
                        translateY: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.height, 0],
                        }),
                      },
                    ]
                  },
                }
              }
            } :
            {
              headerLeft: item.headerLeft || headerLeftComponentMenu,
              headerBackground: () => (
                <Image style={styles.headerImage} source={item.headerBackground.source} />
              ),
              headerTitleStyle: item.headerTitleStyle,
            }
          }
        />
      ))
    }
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: `${100}%`,
    height: Header.height,
  },
});

export default compose(
  connect(
    (state) => ({
    }),
    (dispatch) => ({
    }),
  ),
  lifecycle({
    async componentDidMount() {
    },
  }),
)(NavigatorView);


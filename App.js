import { Provider } from 'react-redux';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { colors } from './src/styles';
import { store, persistor } from './src/redux/store';
import AppView from './src/modules/AppViewContainer';

export default function App() {
  enableScreens();
  if (__DEV__) {
    global.XMLHttpRequest = global.originalXMLHttpRequest ?
        global.originalXMLHttpRequest :
        global.XMLHttpRequest;
    global.FormData = global.originalFormData ?
        global.originalFormData :
        global.FormData;
    global.Blob = global.originalBlob ?
        global.originalBlob :
        global.Blob;
    global.FileReader = global.originalFileReader ?
        global.originalFileReader :
        global.FileReader;

    // fetch logger
    global._fetch = fetch;
    global.fetch = function (uri, options, ...args) {
      return global._fetch(uri, options, ...args).then(response => {
        return response;
      });
    };
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate
          loading={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <ActivityIndicator color={colors.red} />
            </View>
          }
          persistor={persistor}
        >
          <AppView />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

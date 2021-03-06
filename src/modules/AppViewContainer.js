import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Platform, UIManager } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AppView from './AppView';

export default compose(
  connect(
    null,
    {},
  ),
  lifecycle({
    async componentDidMount() {
      if (Platform.OS === 'android') {
        // eslint-disable-next-line no-unused-expressions
        UIManager.setLayoutAnimationEnabledExperimental
          && UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      SplashScreen.hide();
    },
  }),
)(AppView);

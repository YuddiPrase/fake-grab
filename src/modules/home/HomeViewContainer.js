import { compose, withState, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import HomeScreen from './HomeView';

export default compose(
  connect(
    (state) => ({}),
    {},
  ),
  lifecycle({
    componentDidMount() {
    },
  }),
)(HomeScreen);

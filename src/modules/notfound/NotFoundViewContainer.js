// @flow
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import NotFoundView from './NotFoundView';

export default compose(
  connect(
    null,
    { 
    }
  ),
  lifecycle({
    componentDidMount() {
    },
  }),
)(NotFoundView);

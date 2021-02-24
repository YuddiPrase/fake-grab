import TabNavigator from './MainTabNavigator';
import AvailableInFullVersion from '../notfound/NotFoundViewContainer';

const StackNavigationData = [
  {
    name: 'Fake Grab',
    component: TabNavigator,
    headerHide: true,
  },
  {
    name: 'Auth',
    component: AvailableInFullVersion,
    headerHide: true,
  },
];

export {
  StackNavigationData
};

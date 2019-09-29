import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Loading from '../screens/Loading';
import MainTabNavigator from './MainTabNavigator';

export const SwitchNavigator = createSwitchNavigator(
    {
        Loading,
        MainTabNavigator,
    }, {
        initialRouteName: 'Loading',
    }
);

export default RootSwitchNavigator = createAppContainer(SwitchNavigator);
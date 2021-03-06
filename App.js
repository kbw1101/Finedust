import React, {Component} from 'react';
import {
  PermissionsAndroid,
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

import RootSwitchNavigator from './src/components/navigations/RootSwitchNavigator';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducer from './reducers/index';

const store = createStore(combineReducer);

export default class App extends Component<Props> {
  async requestBluetooth() {
    const isEnabled = await BluetoothSerial.isEnabled();
    console.log(isEnabled);
    if (isEnabled) {
    } else {
        BluetoothSerial.requestEnable();
    }
  }

  componentDidMount() {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
    .then(result => {
      if (!result) {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
      }
    });

    this.requestBluetooth();

    request_location_permission();
  }

  render() {
    return (
      <Provider store={store}>
        <RootSwitchNavigator/>
      </Provider>
    );
  }
}



export async function request_location_permission() {
  try {
    const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            'title': 'Location Permission',
            'message': 'Activeev needs to access your location.'
        }
    )
    console.log('here', granted);
    console.log(PermissionsAndroid.RESULTS.GRANTED)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location Permitted")
    } else {
        console.log("Location permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}
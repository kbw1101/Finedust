import React, {Component} from 'react';
import {
  PermissionsAndroid,
} from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

import RootSwitchNavigator from './src/components/navigations/RootSwitchNavigator';

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

    this.interval = setInterval(()=> {
      BluetoothSerial.readFromDevice()
      .then((data) => {
          console.log(data);
          if(data === "wifion") {
            // Do something when receive data via bluetooth serial.
          }
      })
  }, 50);
  }

  render() {
    return (
      <RootSwitchNavigator/>
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
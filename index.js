/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {createSwitchNavigator} from 'react-navigation'
import {name as appName} from './app.json';


const SwitchStack =  createSwitchNavigator({
    App : App
})
AppRegistry.registerComponent(appName, () => SwitchStack);

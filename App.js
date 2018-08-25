import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import EmployeeLogin from './components/employee/EmployeeLogin';
import ManagerLogin from './components/manager/ManagerLogin';
import EmployeeDashboard from './components/employee/EmployeeDashboard';
import EmployeeShift from './components/employee/EmployeeShift';


const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ManagerLogin: {
      screen: ManagerLogin,
    },
    EmployeeLogin: {
      screen: EmployeeLogin,
    },
    EmployeeDashboard: {
      screen: EmployeeDashboard,
    },
    EmployeeShift: {
      screen: EmployeeShift,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

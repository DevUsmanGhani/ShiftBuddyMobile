// import { createStackNavigator } from 'react-navigation';


// export default createStackNavigator(
//   {
//     Home: { screen: HomeScreen },
//     ManagerLogin: { screen: ManagerLogin },
//     ManagerDashboard: { screen: ManagerDashboard },
//     EmployeeLogin: { screen: EmployeeLogin },
//     EmployeeDashboard: { screen: EmployeeDashboard },
//     EmployeeShift: { screen: EmployeeShift }
//   },
//   {
//   initialRouteName: 'Home',
//   headerMode: 'none',
//   }
// );

// /* @flow weak */

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomeScreen from '../components/HomeScreen';
import EmployeeLogin from '../components/employee/EmployeeLogin';
import ManagerLogin from '../components/manager/ManagerLogin';
import ManagerDashboard from '../components/manager/ManagerDashboard';
import EmployeeDashboard from '../components/employee/EmployeeDashboard';
import EmployeeShift from '../components/employee/EmployeeShift';

const RouterCompnent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="login">
        <Scene 
          key="homeScreen" 
          component={HomeScreen} 
          title="Shift Buddy Pro" 
          initial
        />
        <Scene
          key="employeeLogin"
          component={EmployeeLogin}
          title="Employee Login"
        />
        <Scene
          key="managerLogin"
          component={ManagerLogin}
          title="Manager Login"
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterCompnent;


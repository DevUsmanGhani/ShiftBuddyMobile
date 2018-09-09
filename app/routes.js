import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import HomeScreen from '../components/HomeScreen';
import EmployeeLogin from '../components/employee/EmployeeLogin';
import ManagerLogin from '../components/manager/ManagerLogin';
import ManagerDashboard from '../components/manager/ManagerDashboard';
import EmployeeDashboard from '../components/employee/EmployeeDashboard';
import EmployeeShift from '../components/employee/EmployeeShift';

const RouterComponent = () => (
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
      <Scene key="employee">
        <Scene
          key="employeeDashboard"
          component={EmployeeDashboard}
          title="Dashboard"
          rightTitle="Logout"
          onRight={()=>Actions.homeScreen()}
          initial
        />
      </Scene>
      <Scene key="startShift">
        <Scene
          key="employeeShift"
          component={EmployeeShift}
          title="Shift"
          rightTitle="End Shift"
          onRight={()=>Actions.homeScreen()}
          initial
        />
      </Scene>
      <Scene key="manager">
        <Scene
          key="managerDashboard"
          component={ManagerDashboard}
          title="Dashboard"
          rightTitle="Logout"
          onRight={()=>Actions.homeScreen()}
          initial
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;


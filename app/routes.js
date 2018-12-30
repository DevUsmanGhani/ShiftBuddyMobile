import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import EmployeeLogin from '../components/employee/EmployeeLogin';
import ManagerLogin from '../components/manager/ManagerLogin';
import ManagerDashboard from '../components/manager/ManagerDashboard';
import EmployeeDashboard from '../components/employee/EmployeeDashboard';
import EmployeeShift from '../components/employee/EmployeeShift';
import Inventory from '../components/employee/employeeShift/Inventory';
import Change from '../components/employee/employeeShift/Change';

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ManagerLogin: { screen: ManagerLogin },
    ManagerDashboard: { screen: ManagerDashboard },
    EmployeeLogin: { screen: EmployeeLogin },
    EmployeeDashboard: { screen: EmployeeDashboard },
    EmployeeShift: { screen: EmployeeShift },
    Inventory: { screen: Inventory },
    Change: { screen: Change }
  },
  {
  initialRouteName: 'ManagerDashboard',
  headerMode: 'none',
  }
);

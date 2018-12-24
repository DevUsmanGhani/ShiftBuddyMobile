import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import EmployeeLogin from '../components/employee/EmployeeLogin';
import ManagerLogin from '../components/manager/ManagerLogin';
import ManagerDashboard from '../components/manager/ManagerDashboard';
import EmployeeDashboard from '../components/employee/EmployeeDashboard';
import EmployeeShift from '../components/employee/EmployeeShift';
import Inventory from '../components/employee/employeeShift/Inventory';

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    ManagerLogin: { screen: ManagerLogin },
    ManagerDashboard: { screen: ManagerDashboard },
    EmployeeLogin: { screen: EmployeeLogin },
    EmployeeDashboard: { screen: EmployeeDashboard },
    EmployeeShift: { screen: EmployeeShift },
    Inventory: { screen: Inventory }
  },
  {
  initialRouteName: 'Inventory',
  headerMode: 'none',
  }
);

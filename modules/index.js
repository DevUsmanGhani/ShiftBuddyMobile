import { combineReducers } from 'redux';
import employee from './employee';
import manager from './manager';
import employeeShift from './employeeShift';

export default combineReducers({
  employee,
  manager,
  employeeShift
});

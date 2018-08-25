import isEmpty from '../utils/isEmpty';

const SET_CURRENT_EMPLOYEE = 'employee/SET_CURRENT_EMPLOYEE';
const LOGOUT = 'employee/LOG_OUT';


const initialState = {
  isAuthenticated: false,
  employee: {}
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_EMPLOYEE: {
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        employee: action.payload
      }
    }
    default: 
      return;
  }
}

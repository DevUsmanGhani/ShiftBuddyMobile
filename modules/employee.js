import isEmpty from '../utils/isEmpty';

// Types
const SET_CURRENT_EMPLOYEE = 'employee/SET_CURRENT_EMPLOYEE';
const LOGOUT = 'employee/LOG_OUT';

// Initial State
const initialState = {
  isAuthenticated: false,
  employee: {}
}

// Reducer
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
      return state;
  }
}

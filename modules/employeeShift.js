import isEmpty from "../utils/isEmpty";
import axios from "axios";
import { AsyncStorage } from "react-native";

// Types
const SET_CURRENT_SHIFT = "employeeShift/SET_CURRENT_SHIFT ";

// Initial State
const initialState = {
  id: 0,
  paidOuts: [],
  checks: [],
  cashDrops: [],
  inventory_items: [],
  notes: []
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_SHIFT: {
      return {
        ...state,
        id: action.payload
      };
    }
    default:
      return state;
  }
};


// Actions
export const setCurrentShift = (id) => {
  return({
    type: SET_CURRENT_SHIFT,
    payload: id
  })
}

import isEmpty from "../utils/isEmpty";
import axios from "axios";
import { AsyncStorage } from "react-native";

// Types
const SET_CURRENT_SHIFT = "employeeShift/SET_CURRENT_SHIFT ";
const ADD_PAID_OUT = "employeeShift/ADD_PAID_OUT ";
const ADD_CHECK = "employeeShift/ADD_CHECK ";
const ADD_INVENTORY_ITEM = "employeeShift/ADD_INVENTORY_ITEM ";
const ADD_NOTE = "employeeShift/ADD_NOTE ";
const ADD_CASH_DROP = "employeeShift/ADD_CASH_DROP ";
const SET_CURRENT_PAGE = "employeeShift/SET_CURRENT_PAGE ";
const GET_INVENTORY_ITEMS = "employeeShift/GET_INVENTORY_ITEMS";
const SET_INVENTORY_ITEM_FIELD = "employeeShift/SET_INVENTORY_ITEM_FIELD";

// Initial State
const initialState = {
  id: 0,
  inventoryItemField: "start_amount",
  paidOuts: [],
  checks: [],
  cashDrops: [],
  notes: [],
  currentPage: "CashDrops"
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
    case ADD_PAID_OUT: {
      return {
        ...state,
        paidOuts: [...state.paidOuts, action.payload]
      };
    }
    case ADD_CHECK: {
      return {
        ...state,
        checks: [...state.checks, action.payload]
      };
    }
    case ADD_INVENTORY_ITEM: {
      return {
        ...state,
        inventory_items: [...state.inventory_items, action.payload]
      };
    }
    case ADD_NOTE: {
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    }
    case ADD_CASH_DROP: {
      return {
        ...state,
        cashDrops: [...state.cashDrops, action.payload]
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      };
    }
    case GET_INVENTORY_ITEMS: {
      return {
        ...state,
        inventory_items: action.payload
      };
    }
    case SET_INVENTORY_ITEM_FIELD: {
      return {
        ...state,
        inventoryItemField: action.payload
      };
    }
    default:
      return state;
  }
};

// Actions
export const setCurrentShift = id => {
  return {
    type: SET_CURRENT_SHIFT,
    payload: id
  };
};

export const addPaidOut = data => {
  return {
    type: ADD_PAID_OUT,
    payload: data
  };
};

export const addCheck = data => {
  return {
    type: ADD_CHECK,
    payload: data
  };
};

export const addCashDrop = data => {
  return {
    type: ADD_CASH_DROP,
    payload: data
  };
};

export const addNote = data => {
  return {
    type: ADD_NOTE,
    payload: data
  };
};

export const addInventoryItem = data => {
  return {
    type: ADD_INVENTORY_ITEM,
    payload: data
  };
};

export const setCurrentPage = page => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  };
};

export const getInventoryItems = data => {
  return {
    type: GET_INVENTORY_ITEMS,
    payload: data
  };
};

export const setInventoryItemField = field => {
  return {
    type: SET_INVENTORY_ITEM_FIELD,
    payload: field
  };
 };

import axios from "axios";

const SET_SHIFT = "managerShift/SET_SHIFT";
const CLEAR_SHIFT = "managerShift/CLEAR_SHIFT";

const initialState = {
  currentShift: []
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIFT: {
      return {
        ...state,
        currentShift: [action.payload]
      };
    }
    default:
      return state;
  }
};

// Side Effects
export const setShift = (id, callback) => dispatch => {
  axios
    .get(`http://localhost:8000/api/v1/shifts/${id}`)
    .then(res => {
      dispatch({
        type: SET_SHIFT,
        payload: res.data.included
      });
    })
    .then(callback())
    .catch(err => {
      console.log(err);
    });
};

export const clearShift = () => {
  return({
    type: CLEAR_SHIFT,
  })
}

import { combineReducers } from "redux";

const initialState = {
  value: 0
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case "PLUS": {
      return {
        ...state,
        value: ++state.value
      };
    }
    case "MINUS": {
      return {
        ...state,
        value: --state.value
      };
    }
    default:
      return state;
  }
};

const rootReducers = combineReducers({ counter });

export default rootReducers;

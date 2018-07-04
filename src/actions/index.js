import { store } from "../store/store";

export const plus = () => {
  store.dispatch({
    type: "PLUS"
  });
};

export const minus = () => {
  store.dispatch({
    type: "MINUS"
  });
};

import * as actionTypes from "./messages-actionTypes";

export const messagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_MESSAGE:
      return [...state, payload];

    case actionTypes.DELETE_MESSAGE:
      return state.filter((message) => message.id !== payload);

    default:
      return state;
  }
};

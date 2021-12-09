import * as actionTypes from "./messages-actionTypes";

export const addMessage = (text) => ({
  type: actionTypes.ADD_MESSAGE,
  payload: text,
});

export const deleteMessage = (message) => ({
  type: actionTypes.DELETE_MESSAGE,
  payload: message,
});

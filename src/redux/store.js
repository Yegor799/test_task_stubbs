import { createStore, combineReducers } from "redux";
import { messagesReducer } from "../redux/messages/messages-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  messages: messagesReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

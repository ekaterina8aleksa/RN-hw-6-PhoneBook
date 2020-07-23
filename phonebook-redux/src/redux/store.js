import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactsReduser from "./contacts-reduser";

const rootReduser = combineReducers({
  contacts: contactsReduser,
});

const store = createStore(rootReduser, composeWithDevTools());
export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import messagesReducer from "./reducers/messages-reducer";
import profileReducer from "./reducers/profile-reducer";
import usersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
  app: appReducer,
  profilePage: profileReducer, 
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store

export default store;
import { auth } from "./auth-reducer";

const SET_APP_INITIALIZATION = "social-network/app/SET_APP_INITIALIZATION"

const initialState = { initialized: false }

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_INITIALIZATION: return { ...state, initialized: true }
    default: return state;
  }
} 

export default appReducer;

const initializationSuccess = () => ({ type: SET_APP_INITIALIZATION });

export const initializeApp = () => async (dispatch) => {
  const data = await dispatch(auth()) 
  dispatch(initializationSuccess())
}   
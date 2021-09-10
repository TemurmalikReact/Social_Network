import { stopSubmit } from "redux-form"
import { authApi, securityApi } from "../../Api/api"

const SET_AUTH_USER_DATA = "social-network/auth/SET_AUTH_USER_DATA"
const SET_CAPTCHA = "social-network/auth/SET_CAPTCHA"

const initialState = { 
  id: null,
  email: null,
  login: null,  
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case SET_CAPTCHA: return { ...state, ...action.payload }
    default: return state;
  }
} 

export default authReducer;

const setUserData = (id, email, login, isAuth) => ({ 
  type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } 
});

const setCaptcha = (captchaUrl) => ({ type: SET_CAPTCHA, payload: { captchaUrl }});

export const auth = () => async (dispatch) => {
  const data = await authApi.auth()
  const { id, email, login } = data.data
  if (data.resultCode === 0) {
    dispatch(setUserData(id, email, login, true))
  } 
}

export const login = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
  const data = await authApi.login(email, password, rememberMe, captchaUrl) 
  if (data.resultCode === 0) {
    dispatch(auth()) 
  }
  else {
    if (data.resultCode === 10) {
      dispatch(requestCaptcha())
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some Error" 
    dispatch(stopSubmit("login", { _error: message}))
  }
}

export const logout = () => async (dispatch) => {
  const data = await authApi.logout()
  if (data.resultCode === 0) {
    dispatch(setUserData(null, null, null, false))
  }
}

export const requestCaptcha = () => async (dispatch) => {
  const data = await securityApi.getCaptcha()
  const captchaUrl = data.url
  dispatch(setCaptcha(captchaUrl))
}
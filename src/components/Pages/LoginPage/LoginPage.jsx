import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { login } from "../../../redux/reducers/auth-reducer"
import { getCaptcha, getIsAuth } from "../../../redux/selectors/auth-selectors"
import LoginForm from "./LoginForm/LoginForm"
import style from "./LoginPage.module.css"

const LoginPage = ({login, isAuth, captchaUrl}) => {
  const onSubmit = value => { 
    const { email, password, rememberMe, captchaUrl } = value
    login(email, password, rememberMe, captchaUrl)
  }
  if (isAuth) return <Redirect to="/profile" />
  return (
    <div className={style.loginForm}> 
      <LoginForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = state => ({
  captchaUrl: getCaptcha(state),
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, { login })(LoginPage) 
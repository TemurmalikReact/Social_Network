import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getIsAuth } from "../../redux/selectors/auth-selectors"

const WithRedirect = WithNewComponent => {
  const RedirectComponent = ({isAuth, ...props}) => {
    if (!isAuth) return <Redirect to="/login" /> 
    return <WithNewComponent {...props} />
  }

  const mapStateToProps = state => ({ isAuth: getIsAuth(state) })
  
  const RedirectComponentConnect = connect(mapStateToProps)(RedirectComponent)
  
  return RedirectComponentConnect
}

export default WithRedirect;
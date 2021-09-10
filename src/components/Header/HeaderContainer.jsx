import classes from "./Header.module.css";
import Brand from "./Brand/Brand";
import Login from "./Login/Login";
import { connect } from "react-redux";
import { getIsAuth, getLogin } from "../../redux/selectors/auth-selectors";

const Header = (props) => 
  <header className={classes.header}> 
    <Brand toggleNavbar={props.toggleNavbar} />
    <Login {...props} /> 
  </header>

const mapStateToProps = (state, props) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
  toggleNavbar: props.toggleNavbar
})

export default connect(mapStateToProps, null)(Header);   
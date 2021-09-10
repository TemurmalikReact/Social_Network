import { NavLink } from "react-router-dom";
import classes from "../Header.module.css";
import { logout } from "../../../redux/reducers/auth-reducer";
import { connect } from "react-redux";

const Login = props => 
  <div className={classes.login}> 
    { !props.isAuth 
      ? <NavLink to={`/login`}> Login </NavLink> 
      : <> {props.login} <button onClick={props.logout} > Logout </button>  </> }
  </div>

export default connect(null, { logout })(Login);  
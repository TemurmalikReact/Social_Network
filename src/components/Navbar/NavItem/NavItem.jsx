import { NavLink } from "react-router-dom";
import classes from "../Navbar.module.css";

const NavItem = ({name, svg}) => 
  <div className={classes.item}>
    <NavLink activeClassName={classes.active} to={`/${name}`}>
      <svg viewBox="0 0 33 33"> {svg} </svg> { name }
    </NavLink>
  </div>

export default NavItem;
import { NavLink } from "react-router-dom"
import classes from "../Dialog.module.css"
import logo from "../../../../Common/logo.png"

const DialogItem = ({details}) => 
  <div className={classes.item}>
    <NavLink activeClassName={classes.active} to={`/messages/${details.id}`}>
      <img src={details.img || logo} alt="" />
      {details.name}
    </NavLink>
  </div>

export default DialogItem;
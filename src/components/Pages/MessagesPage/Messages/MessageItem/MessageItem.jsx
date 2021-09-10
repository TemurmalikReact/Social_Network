import classes from "../Messages.module.css"
import logo from "../../../../Common/logo.png"

const MessageItem = ({img, details}) => 
  <div className={`${classes.item} ${classes.right}`}>
    <img src={img || logo} alt="" />
    <span> {details.messageText} </span>
  </div>

export default MessageItem 
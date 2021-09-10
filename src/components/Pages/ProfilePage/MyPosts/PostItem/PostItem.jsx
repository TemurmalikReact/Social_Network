import classes from "../../ProfilePageContainer.module.css"
import logo from "../../../../Common/logo.png"

const Post = ({ details: { postText }, img }) => 
  <div className={classes.item}>
    <img src={img || logo} alt="" />
    <span> {postText} </span>
  </div>

export default Post; 
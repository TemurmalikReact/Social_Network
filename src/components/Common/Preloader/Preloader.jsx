import classes from "./Preloader.module.css";
import gif from "./preloader.gif"

const Preloader = () => {
  return <img src={gif} className={classes.preloader} />
}

export default Preloader;
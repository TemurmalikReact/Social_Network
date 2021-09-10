import classes from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = ({dialogs}) => {
  const renderDialogs = () => dialogs.map(d => <DialogItem details={d} key={d.id} /> )

  return <div className={classes.wrapper}> { renderDialogs() } </div>
}

export default Dialogs;
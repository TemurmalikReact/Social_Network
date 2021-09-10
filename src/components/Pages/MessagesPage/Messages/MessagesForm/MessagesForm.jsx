import { Field, reduxForm } from "redux-form"
import { FormControl } from "../../../../Common/FormControl/FormControl"
import { maxLengthCreator } from "../../../../../Utils/validators"
import classes from "../Messages.module.css" 

const maxLength = maxLengthCreator(50)

const Form = ({handleSubmit}) => 
  <form className={classes.form} onSubmit={handleSubmit}>
    <Field name="messageText" component={FormControl} placeholder="Your message goes here..." 
      validate={[maxLength]} />
    <button> Click </button>  
  </form>

const MessagesForm = reduxForm({ form: "MessagesForm" })(Form)

export default MessagesForm; 
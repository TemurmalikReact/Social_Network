import { reduxForm } from "redux-form"
import { FormControl, createField } from "../../../Common/FormControl/FormControl"
import { required } from "../../../../Utils/validators"
import classes from "../../../Common/FormControl/FormControl.module.css"
import { Fragment } from "react"

const Form = ({handleSubmit, error, captchaUrl}) => {
  const Error = () => <div className={error && classes.formSummaryError}> {error && error} </div>

  return (
    <form onSubmit={handleSubmit}>
      { createField("email", "Email", FormControl, "text", [required]) } 
      { createField("password", "Password", FormControl, "password", [required]) } 
      { createField("rememberMe", null, FormControl, "checkbox", []) } 
      <span> Remember Me </span>
      { captchaUrl && 
        <Fragment> 
          <img src={captchaUrl} /> 
          { createField("captchaUrl", "Type the message from picture", FormControl, "text", [required]) }
        </Fragment> }
      <Error />
      <br />
      <button> Submit </button>
    </form>
  )
}

const LoginForm = reduxForm({ form: "LoginForm" })(Form)  

export default LoginForm;
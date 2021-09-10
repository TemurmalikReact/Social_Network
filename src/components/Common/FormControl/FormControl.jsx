import { Fragment } from "react"
import { Field } from "redux-form"
import classes from "./FormControl.module.css"

export const FormControl = ({input, meta: { touched, error }, ...props}) => {
  const hasError = touched && error
  return (
    <Fragment>
      <input {...input} {...props}
        className={`${classes.formInput} ${hasError && classes.error}`} />
      { hasError && <span className={classes.errorText}> { error } </span>}
    </Fragment>
  )
} 

export const createField = ( name, placeholder, component, type, validate ) =>  {
  return (
    <div> 
      <Field name={name} component={component} validate={validate} 
        type={type} placeholder={placeholder} /> 
    </div> 
  )
} 
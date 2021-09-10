import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../../../Utils/validators";

const maxLength = maxLengthCreator(50)

const Form = ({handleSubmit}) =>
  <form onSubmit={handleSubmit}>
    <Field name="postText" component="input" placeholder="Your message goes here..." 
      validate={[maxLength]}  />
    <button> Click </button>
  </form>

const MyPostsForm = reduxForm({ form: "PostForm" })(Form)

export default MyPostsForm; 
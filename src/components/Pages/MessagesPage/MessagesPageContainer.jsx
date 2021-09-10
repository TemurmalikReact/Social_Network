import { connect } from "react-redux";
import { compose } from "redux";
import { addMessage } from "../../../redux/reducers/messages-reducer";
import { getDialogs, getMessages } from "../../../redux/selectors/messages-selectors";
import WithRedirect from "../../hoc/WithRedirect";
import MessagesPage from "./MessagesPage";

const mapStateToProps = state => ({ 
  messages: getMessages(state),
  dialogs: getDialogs(state),
})

const MessagesPageContainer = compose(
  connect(mapStateToProps, { addMessage }),
  WithRedirect
)(MessagesPage)

export default MessagesPageContainer;
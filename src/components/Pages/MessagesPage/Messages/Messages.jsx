import classes from "./Messages.module.css"
import MessageItem from "./MessageItem/MessageItem"
import MessagesForm from "./MessagesForm/MessagesForm"

const Messages = ({messages}) => {
  const renderMessages = () =>
    messages.details.map(m => 
      <MessageItem key={m.id} img={messages.img} details={m} /> )

  const addMessage = value => addMessage(value.messageText)
  
  return (
    <div className={classes.wrapper}> 
      <MessagesForm onSubmit={addMessage} />
      { renderMessages() } 
    </div>
  );
}

export default Messages;
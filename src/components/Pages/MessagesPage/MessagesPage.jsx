import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages"

const MessagesPage = ({dialogs, messages, addMessage}) => 
  <div className="messages page">
    <Dialogs dialogs={dialogs} />
    <Messages messages={messages} addMessage={addMessage} />
  </div>

export default MessagesPage;
import MainMessage from "./MainMessage";
import SendMessage from "./SendMessage";

const MessageContent = ({ user, ticket }) => {
  

  return (
    <>
      <MainMessage user={user} ticket={ticket} />
      <SendMessage user={user} ticket={ticket}/>
    </>
  );
};

export default MessageContent;

import MainMessage from "./MainMessage";

const MessageContent = ({ user, ticket }) => {
  

  return (
    <>
      <MainMessage user={user} ticket={ticket} />
    </>
  );
};

export default MessageContent;

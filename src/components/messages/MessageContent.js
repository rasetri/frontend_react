import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import MainMessage from "./MainMessage";
import SendMessage from "./SendMessage";
import { MessageService } from "../../services/Message";
import MessageModel from "../models/MessageModel";

const MessageContent = ({ user, ticket }) => {
  const [listMessages, set_listMessages] = useState([]);
  const _messageService = new MessageService();

  //Add a new message to local
  const addToList = (message) => {
    let list = [...listMessages];
    list.push(message);
    set_listMessages(list);
  };

  //Get initial Messages for the ticket
  const getInitData = () => {
    _messageService
      .getMessagesByTicket(ticket.id)
      .then((res) => {
        set_listMessages([]);
        const {
          data: { ticketMessages },
        } = res;
        set_listMessages(ticketMessages);
      }) //There are errors
      .catch((res) => toast.error(res.message));
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <MainMessage user={user} ticket={ticket} />
      {listMessages.map((message) => (
        <MessageModel user={user} message={message} key={message.id} />
      ))}
      {!ticket.closed && (
        <SendMessage user={user} ticket={ticket} addToList={addToList} />
      )}
      {ticket.closed && (
        <p className="h4" style={{color: "red"}}>Ticket closed! You can not reply anymore.</p>
      )}
    </>
  );
};

export default MessageContent;

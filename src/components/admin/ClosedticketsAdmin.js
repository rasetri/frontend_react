import { TicketService } from "../../services/Ticket";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Tablelist from "../models/Tablelist";

const Closedticketadmin = () => {
  const [listTickets, set_listTickets] = useState([]);
  const _ticketService = new TicketService();
  const closed = true;

  //Get initial Open tickets for the admin
  const getInitData = () => {
    _ticketService
      .adminGetTickets(closed)
      .then((res) => {
        set_listTickets([]);
        const {
          data: {
            ticketsConnection: { values: tickets },
          },
        } = res;
        if (tickets.length) {
          //There are some tickets
          set_listTickets(tickets);
        } else {
          //There are no ticket yet for the admin
        }
      }) //There are errors
      .catch((res) => toast.error(res.message));
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Tablelist ticketlist={listTickets}/>
    </>
  );
};

export default Closedticketadmin;

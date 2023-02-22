import { TicketService } from "../../services/Ticket";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Tablelist from "../models/Tablelist";

const Openticketsadmin = () => {
  const [listTickets, set_listTickets] = useState([]);
  const _ticketService = new TicketService();
  const closed = false;

  //Delete a closed support ticket
  const deleteFromList = (id) => {
    let list = [...listTickets];
    list = list.filter((x) => {
      return x.id !== id;
    });
    set_listTickets(list);
  };

  //Get initial Open tickets for the user
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
        set_listTickets(tickets);
      }) //There are errors
      .catch((res) => toast.error(res.message));
  };

  useEffect(() => {
    getInitData();
  }, []);

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <Tablelist ticketlist={listTickets} deleteFromList={deleteFromList} />
    </>
  );
};

export default Openticketsadmin;

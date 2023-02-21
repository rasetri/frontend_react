import { TicketService } from "../../services/Ticket";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const Tablelist = ({ ticketlist, deleteFromList }) => {
  const _ticketService = new TicketService();

  const handleClose = (id) => {
    confirmAlert({
      title: "Confirmation",
      message: `Close the support ticket?`,
      buttons: [
        {
          label: "confirm",
          onClick: () => {
            _ticketService
              .closeTicket(id)
              .then(() => {
                toast.success(`Ticket has been closed!`);
                deleteFromList(id);
              })
              .catch((res) => toast.error(res.message));
          },
        },
        {
          label: "Cancel"
        },
      ],
    });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Updated on</th>
            <th>Created on</th>
            <th>Label</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ticketlist.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{new Date(ticket.updated_at).toLocaleString()}</td>
              <td>{new Date(ticket.created_at).toLocaleString()}</td>
              <td>{ticket.label}</td>
              <td>{ticket.description}</td>
              {!ticket.closed && (
                <td>
                  <p
                    className="btn btn-danger btn-sm"
                    onClick={()=> handleClose(ticket.id)}
                  >
                    Close
                  </p>
                </td>
              )}
              <td>
                <Link
                  className="btn btn-primary btn-sm"
                  to="/viewTicketMessage"
                  state={ticket}
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!ticketlist.length && <p className="lead">No ticket yet on the list</p>}
    </>
  );
};

export default Tablelist;

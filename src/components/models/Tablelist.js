import { Link } from "react-router-dom";

const Tablelist = ({ ticketlist }) => {
  return (
    <>
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
              <td>
                <Link className="btn btn-primary btn-sm" to="/viewTicketMessage" state={ticket}>
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tablelist;

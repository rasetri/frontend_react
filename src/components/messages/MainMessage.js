import { Link } from "react-router-dom";

const MainMessage = ({ user, ticket }) => {
  const is_ticket = true;
  const id = ticket.id;

  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          <strong>{ticket.user_id.name}</strong> -{" "}
          {new Date(ticket.created_at).toLocaleDateString()},{" "}
          {new Date(ticket.created_at).getHours()}:
          {new Date(ticket.created_at).getMinutes()}
        </div>
        <div className="card-body">
          <h3>{ticket.label}</h3>
          <p className="lead">{ticket.description}</p>
        </div>
        <div className="card-footer">
          <Link
            className="nav-link"
            to="/viewAttachments"
            state={{ user, is_ticket, id }}
          >
            Add / View Attachments
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainMessage;

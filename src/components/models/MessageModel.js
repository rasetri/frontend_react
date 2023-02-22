import { Link } from "react-router-dom";

const MessageModel = ({ user, message }) => {
  const is_ticket = false;
  const id = message.id;

  return (
    <div className="card mb-4">
      <div className="card-header">
        <strong>{message.person_id.name}</strong> -{" "}
        {new Date(message.created_at).toLocaleDateString()},{" "}
        {new Date(message.created_at).getHours()}:
        {new Date(message.created_at).getMinutes()}
      </div>
      <div className="card-body">
        <p>{message.message}</p>
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
  );
};

export default MessageModel;

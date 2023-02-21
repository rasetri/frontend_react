const MainMessage = ({ user, ticket }) => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-header">
          {ticket.user_id.name} -{" "}
          {new Date(ticket.created_at).toLocaleDateString()},{" "}
          {new Date(ticket.created_at).getHours()}:
          {new Date(ticket.created_at).getMinutes()}
        </div>
        <div className="card-body">
          <h3>{ticket.label}</h3>
          <p>{ticket.description}</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </>
  );
};

export default MainMessage;

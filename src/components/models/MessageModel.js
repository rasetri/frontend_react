const MessageModel = ({ user, message }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        {message.person_id.name} -{" "}
        {new Date(message.created_at).toLocaleDateString()},{" "}
        {new Date(message.created_at).getHours()}:
        {new Date(message.created_at).getMinutes()}
      </div>
      <div className="card-body">
        <p>{message.message}</p>
      </div>
      <div className="card-footer"></div>
    </div>
  );
};

export default MessageModel;

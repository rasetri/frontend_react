const MainMessage = ({ user, ticket }) => {
  return (
    <div className="container spaceUp">
      <div className="row">
        <div className="col-md-10 col-lg-8">
          <div className="post-preview">
            <h3 className="post-title">
              <u>Title</u>: {ticket.label}
            </h3>
            <blockquote className="blockquote">
              <p>{ticket.description}</p>
              <footer className="blockquote-footer">
                {ticket.user_id.author} -{" "}
                <cite title="Source Title">
                  {new Date(ticket.created_at).toLocaleString()}
                </cite>
              </footer>
            </blockquote>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default MainMessage;
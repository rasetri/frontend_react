import { useLocation } from "react-router-dom";
import Layout from "../../components/home/Layout";
import MessageContent from "../../components/messages/MessageContent";

function MessagePage() {
  const { state } = useLocation();
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const title = `Support ticket number ${state.id}`;

  return (
    <div>
      <Layout user={user} title={title}>
        <MessageContent user={user} ticket={state}/>
      </Layout>
    </div>
  );
}

export default MessagePage;

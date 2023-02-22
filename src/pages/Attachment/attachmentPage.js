import { useLocation } from "react-router-dom";
import Layout from "../../components/home/Layout";
import Attachment from "../../components/attachment/Attachment";

function AttachmentPage() {
  const { state } = useLocation();
  const title = "Add a file";

  return (
    <div>
      <Layout user={state.user} title={title}>
        <Attachment user={state.user} is_ticket={state.is_ticket} id={state.id}/>
      </Layout>
    </div>
  );
}

export default AttachmentPage;

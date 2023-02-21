import { useLocation } from "react-router-dom";
import Layout from "../../components/home/Layout";
import Closedticketsuser from "../../components/user/ClosedticketsUser";
import Closedticketsadmin from "../../components/admin/ClosedticketsAdmin";

function ClosedTicketsPage() {
  const { state } = useLocation();
  const isUser = state.role === "user";
  const title = isUser ? "My closed tickets" : "Closed tickets";

  return (
    <div>
      <Layout user={state} title={title}>
        {isUser && <Closedticketsuser user={state} />}
        {!isUser && <Closedticketsadmin user={state} />}
      </Layout>
    </div>
  );
}

export default ClosedTicketsPage;

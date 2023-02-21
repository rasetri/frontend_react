import { useLocation } from "react-router-dom";
import Layout from "../../components/home/Layout";
import Openticketsuser from "../../components/user/OpenticketsUser";
import Openticketsadmin from "../../components/admin/OpenticketsAdmin";

function OpenTicketsPage() {
  const { state } = useLocation();
  const isUser = state.role === "user";
  const title = isUser ? "My Opened tickets" : "Opened tickets";

  return (
    <div>
      <Layout user={state} title={title}>
        {isUser && <Openticketsuser user={state} />}
        {!isUser && <Openticketsadmin user={state} />}
      </Layout>
    </div>
  );
}

export default OpenTicketsPage;

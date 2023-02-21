import { useLocation } from "react-router-dom";
import Layout from "../../components/home/Layout";
import Createticket from "../../components/user/Createticket";

function Createticketpage() {
  let { state } = useLocation();
  const title = "Create a support ticket";
  return (
    <div>
      <Layout user={state} title={title}>
        <Createticket user={state}/>
      </Layout>
    </div>
  );
}

export default Createticketpage;

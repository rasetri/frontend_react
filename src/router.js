import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ClosedTicketsPage from "./pages/home/closedTicketsPage";
import Createticketpage from "./pages/home/createTicketPage";
import OpenTicketsPage from "./pages/home/openTicketsPage";
import Signin from "./pages/login/signin";
import Signup from "./pages/login/signup";
import MessagePage from "./pages/messages/messagePage";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/createTicket" element={<Createticketpage />} />
          <Route path="/openTickets" element={<OpenTicketsPage />} />
          <Route path="/closedTickets" element={<ClosedTicketsPage />} />
          <Route path="/viewTicketmessage" element={<MessagePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

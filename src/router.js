import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/login/signin";
import Signup from "./pages/login/signup";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

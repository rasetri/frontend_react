import { BrowserRouter, Routes, Route } from "react-router-dom";
import Boiler from "./components/test/Boiler";
import Boilerz from "./components/test/Boilerz";
import Signin from "./pages/login/signin";
import Signup from "./pages/login/signup";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bo" element={<Boilerz />}>
            <Route path="boilerz" element={<Boiler />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;

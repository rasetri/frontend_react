import "./App.css";
import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Home from "./pages/home/home";

function App() {
  const logged = (JSON.parse(localStorage.getItem("loggedUser")));
    const navigate = useNavigate();    

    useEffect(() => {
      if(!logged) navigate('/signin');
    }, [logged, navigate]); 
  return (
    <div>
      <Home user={logged} />
    </div>
  );
}

export default App;

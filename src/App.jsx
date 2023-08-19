import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

import SignUpForm from "./Pages/SignUp";
import LogIn from "./Pages/login";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <>
  
     <Routes>
        <Route path="/" element = { <Home />}/> 
        <Route path="/signup" element = { <SignUpForm/> }/>
        <Route path="/login" element={<LogIn/>}/>
      </Routes>

     
    </>
  );
}

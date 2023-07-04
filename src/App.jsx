import "./App.css";
import Home from "./Components/Home";
// import {BrowserRouter, Router, Routes} from "react-router-dom"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Payment } from "./Components/Payment";
function App() {
  return (
    <>
      <Login />
      <SignUp />
      <Home />
      <Payment />
    </>
  );
}

export default App;

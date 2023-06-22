import "./App.css";
import Home from "./Components/Home";
// import {BrowserRouter, Router, Routes} from "react-router-dom"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <Login />
      <SignUp />
      <Home />
    </>
  );
}

export default App;

import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Ticket } from "./Components/Ticket";
import { TicketConfirmation } from "./Components/TicketConfirmation";
import Payment from "./Components/Payment";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Login" exact Component={Login} />
        <Route path="/SignUp" exact Component={SignUp} />
        <Route path="/Ticket" exact Component={Ticket} />
        <Route path="/Payment" exact Component={Payment} />
        <Route path="/Home" exact Component={Home} />

        <Route
          path="/TicketConformation"
          exact
          Component={TicketConfirmation}
        />
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;

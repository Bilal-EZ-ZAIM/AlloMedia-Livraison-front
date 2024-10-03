import { useState } from "react";
import "./App.css";
import Verifie from "./commeptes/verfie";
import Login from "./pages/login";
import Register from "./pages/regester";
import Header from "./commeptes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VerfieOtp from "./pages/VerfieOtp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/verfei" element={<VerfieOtp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

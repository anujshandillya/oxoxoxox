import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignInPage from "../components/SignIn";
import SignUpPage from "../components/SignUp";
import IndexPage from "../components/IndexPage";
import NavBar from "../components/NavBar";
import Home from "./scenes/Home";
import Dashboard from "../components/ui/Dashboard"
import Chat from "./Chat/Chat";
const App = () => {
  return (
    <>
    {/* <div className="flex h-screen felx-col"> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
      {/* </div> */}
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUp";
import LoginInPage from "./components/LogIn";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/login" element={<LoginInPage />} />
    </Routes>
  </Router>
);

export default App;

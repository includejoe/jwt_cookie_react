import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";

function App() {
  const [name, setName] = useState("");

  const fetchUser = async () => {
    return axios
      .get("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((data) => {
        setName(data?.data?.name);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [name]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav setName={setName} name={name} />

        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

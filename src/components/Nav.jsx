import React from "react";
import axios from "axios";

export default function Nav({ name, setName }) {
  const logout = async () => {
    axios
      .post(
        "http://localhost:8000/api/logout",
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((data) => {
        setName("");
      });
  };

  let menu;
  if (name === "") {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link active" href="/login">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/register">
            Register
          </a>
        </li>
      </ul>
    );
  } else {
    menu = (
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
          <a className="nav-link active" href="/" onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Home
        </a>

        <div>{menu}</div>
      </div>
    </nav>
  );
}

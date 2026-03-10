import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#f0f0f0" }}>
        <h1 style={{ margin: 0 }}>Daily Fitness </h1>
        <nav style={{ marginTop: "0.5rem" }}>
          <NavLink
            to="/"
            end
            style={{ marginRight: "1rem", color: "black" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Workouts
          </NavLink>
          <NavLink
            to="/about"
            style={{ color: "black" }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

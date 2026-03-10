import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const getLinkStyle = (linkName) => ({
    color: "#222430",
    textDecoration: "none",
    padding: "0.6rem 1rem",
    borderRadius: "0.4rem",
    backgroundColor: hoveredLink === linkName ? "#dedde0" : "#f0eeef",
    cursor: "pointer",
    transition: "background-color 0.2s",
  });

  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{ margin: 0, color: "#501183" }}>Daily Fitness</h1>
        <nav style={navStyle}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            style={getLinkStyle("workouts")}
            onMouseEnter={() => setHoveredLink("workouts")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Workouts
          </NavLink>
          <NavLink
            to="/journal"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={getLinkStyle("journal")}
            onMouseEnter={() => setHoveredLink("journal")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Journal
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={getLinkStyle("about")}
            onMouseEnter={() => setHoveredLink("about")}
            onMouseLeave={() => setHoveredLink(null)}
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

const headerStyle = {
  padding: "1rem",
  background: "#f0f0f0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const navStyle = { display: "flex", gap: "1rem" };

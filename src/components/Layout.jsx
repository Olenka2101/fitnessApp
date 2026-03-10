import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>Daily Fitness</h1>
        <nav style={navStyle}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            style={linkStyle}
          >
            Workouts
          </NavLink>
          <NavLink
            to="/journal"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={linkStyle}
          >
            Journal
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={linkStyle}
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
const linkStyle = { color: "black", textDecoration: "none" };

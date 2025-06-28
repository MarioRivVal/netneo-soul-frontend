import React from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Inicio" },
    { path: "/journal", label: "Diario" },
    { path: "/chat", label: "Chat" },
    { path: "/history", label: "Historial" },
  ];

  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          style={{
            textDecoration: pathname === path ? "underline" : "none",
            fontWeight: pathname === path ? "bold" : "normal",
          }}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

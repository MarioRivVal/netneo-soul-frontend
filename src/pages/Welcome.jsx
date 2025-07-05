import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import "../styles/pages/welcome.css"; // importa aquí

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim() === "") return;

    localStorage.setItem("userName", name.trim());
    navigate("/emotional-check");
  };

  return (
    <div className="welcome-container">
      <h1>Bienvenido a tu espacio emocional 🌱</h1>
      <p>¿Cómo te gustaría que te llamemos?</p>
      <input
        type="text"
        placeholder="Escribí tu nombre o alias"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleStart}>Comenzar</Button>
    </div>
  );
};

export default Welcome;

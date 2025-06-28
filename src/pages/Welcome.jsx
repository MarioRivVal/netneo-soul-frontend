import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim() === "") return;

    localStorage.setItem("userName", name.trim());
    navigate("/emotional-check");
  };

  return (
    <div>
      <h1>Bienvenido a tu espacio emocional 🌱</h1>
      <p>¿Cómo te gustaría que te llamemos?</p>
      <input
        type="text"
        placeholder="Escribí tu nombre o alias"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleStart}>Comenzar</button>
    </div>
  );
};

export default Welcome;

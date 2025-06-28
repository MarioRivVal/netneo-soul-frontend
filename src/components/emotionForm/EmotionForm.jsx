import React from "react";
import { useState } from "react";

const EmotionForm = () => {
  const [formData, setFormData] = useState({
    emotion: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tc7zr80jy1.execute-api.eu-north-1.amazonaws.com/dev-2/emotions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("Respuesta de la API:", data);
      alert("Emoción registrada con éxito ✨");
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Ocurrió un error 😢");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      <input
        name="emotion"
        placeholder="¿Cómo te sentís hoy?"
        value={formData.emotion}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Contá un poco más..."
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Registrar emoción</button>
    </form>
  );
};

export default EmotionForm;

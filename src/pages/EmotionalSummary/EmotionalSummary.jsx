// EmotionalSummary.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EmotionalSummary.module.css";
import Button from "../../components/Button";
import { useSummaryHandler } from "./useSummaryHandler";

const EmotionalSummary = () => {
  const navigate = useNavigate();

  const { summaryText, loading, error } = useSummaryHandler();

  /* ---------- Render ---------- */
  if (loading) return <p>Cargando resumen emocional...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!summaryText) return <p>No hay resumen disponible.</p>;

  const paragraphs = summaryText.split(/\n+/).filter(Boolean);

  return (
    <div className="summary-container">
      <h1>Tu perfil emocional inicial 🧠💙</h1>

      {paragraphs.map((p, idx) => (
        <p key={idx} className="summary-profile">
          {p}
        </p>
      ))}

      <div className="summary-cta">
        <p>
          ¿Querés guardar este perfil y acceder a más herramientas para tu
          bienestar?
        </p>
        <Button onClick={() => navigate("/register")}>Crear cuenta</Button>
        <p className="summary-note">
          Tus respuestas estarán seguras y podrás seguir explorando cuando
          quieras.
        </p>
      </div>
    </div>
  );
};

export default EmotionalSummary;

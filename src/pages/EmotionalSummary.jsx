// EmotionalSummary.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/emotionalSummary.css";
import Button from "../components/Button";

/**
 * Obtiene el resumen emocional generado por la IA en Bedrock
 * y lo muestra.
 * - Envía al endpoint las respuestas que el usuario guardó en localStorage.
 * - Persiste la respuesta en localStorage para poder reutilizarla offline.
 */
const EmotionalSummary = () => {
  const navigate = useNavigate();

  /** Texto devuelto por la IA */
  const [summaryText, setSummaryText] = useState("");
  /** true mientras esperamos la respuesta */
  const [loading, setLoading] = useState(true);
  /** mensaje de error si algo falla */
  const [error, setError] = useState(null);

  const userName = localStorage.getItem("userName");
  const storedAnswers =
    JSON.parse(localStorage.getItem("emotionalAnswers")) || [];

  /** Endpoint de tu API (POST emotions/summary) */
  const API_URL =
    "https://tc7zr80jy1.execute-api.eu-north-1.amazonaws.com/dev-2/emotions/summary";

  useEffect(() => {
    // 1) ¿Ya teníamos un resumen guardado? => úsalo y no llames a la IA otra vez.
    const cached = localStorage.getItem("emotionalSummary");
    if (cached) {
      setSummaryText(cached);
      setLoading(false);
      return;
    }

    // 2) Llamar a la IA
    const fetchSummary = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName, answers: storedAnswers }),
        });

        if (!response.ok) throw new Error(`API error ${response.status}`);

        const data = await response.json();
        const summary = data.summary || "No se obtuvo resumen.";

        localStorage.setItem("emotionalSummary", summary);
        setSummaryText(summary);
      } catch (err) {
        console.error(err);
        setError(
          "No pudimos generar tu resumen en este momento. Intentalo más tarde."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------------- render ---------------- */
  if (loading) return <p>Cargando resumen emocional...</p>;
  if (error) return <p className="error">{error}</p>;

  // Dividimos el texto en párrafos para mostrarlo bonito
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
        <Button onClick={() => navigate("/register")} />
        <p className="summary-note">
          Tus respuestas estarán seguras y podrás seguir explorando cuando
          quieras.
        </p>
      </div>
    </div>
  );
};

export default EmotionalSummary;

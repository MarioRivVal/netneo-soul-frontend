import React from "react";
import { useEffect, useState } from "react";
import Nav from "../components/nav/Nav";
import EmotionList from "../components/emotionList/EmotionList";

function History() {
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmotions = async () => {
      try {
        const res = await fetch(
          "https://tc7zr80jy1.execute-api.eu-north-1.amazonaws.com/dev-2/emotions"
        );
        const data = await res.json();

        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEmotions(sorted);
      } catch (err) {
        console.error("Error al obtener emociones:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmotions();
  }, []);

  return (
    <div>
      <Nav />
      <h1>Historial emocional</h1>
      {loading ? <p>Cargando...</p> : <EmotionList emotions={emotions} />}
    </div>
  );
}
export default History;

import React from "react";

const EmotionList = ({ emotions }) => {
  if (!emotions || emotions.length === 0) {
    return <p>No hay emociones registradas aún.</p>;
  }

  return (
    <ul>
      {emotions.map((item) => (
        <li key={item.id}>
          <strong>{item.emotion}</strong> – {item.description} ({item.date})
        </li>
      ))}
    </ul>
  );
};

export default EmotionList;

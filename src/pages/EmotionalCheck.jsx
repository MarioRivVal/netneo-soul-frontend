import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../content/emotionalQuestions";

import "../styles/pages/emotionalCheck.css"; // Assuming you have a CSS file for styling

const EmotionalCheck = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (option) => {
    const updatedAnswers = [
      ...answers,
      { question: questions[current].question, answer: option },
    ];
    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem("emotionalAnswers", JSON.stringify(updatedAnswers));
      navigate("/emotional-summary");
    }
  };

  const q = questions[current];

  return (
    <div className="check-container">
      <h3>
        Pregunta {current + 1} de {questions.length}
      </h3>
      <h2>{q.question}</h2>
      {q.options.map((opt, index) => (
        <button key={index} onClick={() => handleAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default EmotionalCheck;

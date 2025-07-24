import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../content/emotionalQuestions";
import { setLocalStorageItem } from "../../utils/localStorage";

export const useEmotionalQuestionsHandler = () => {
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
      setLocalStorageItem("emotionalAnswers", JSON.stringify(updatedAnswers));

      navigate("/emotional-summary");
    }
  };

  const q = questions[current];

  return {
    q,
    current,
    handleAnswer,
  };
};

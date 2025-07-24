import React from "react";
import styles from "./EmotionalQuestions.module.css";
import questions from "../../content/emotionalQuestions";
import { useEmotionalQuestionsHandler } from "./useEmotionalQuestionsHandler";

const EmotionalQuestions = () => {
  const { q, current, handleAnswer } = useEmotionalQuestionsHandler();

  return (
    <div className={styles.container}>
      <h3 className={styles.titleH3}>
        Pregunta {current + 1} de {questions.length}
      </h3>
      <h2 className={styles.titleH2}>{q.question}</h2>
      {q.options.map((opt, index) => (
        <button
          className={styles.btn}
          key={index}
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default EmotionalQuestions;

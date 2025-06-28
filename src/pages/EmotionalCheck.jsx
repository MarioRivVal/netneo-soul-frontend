import React from "react";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "¿Cómo te has sentido en general los últimos días?",
    options: ["Tranquilo/a", "Estresado/a", "Triste", "Con altibajos"],
  },
  {
    id: 2,
    question:
      "Si tuvieras que elegir una emoción que te acompaña últimamente, ¿cuál sería?",
    options: ["Ansiedad", "Cansancio emocional", "Alegría", "Frustración"],
  },
  {
    id: 3,
    question: "¿Tenés con quién hablar cuando algo te afecta emocionalmente?",
    options: ["Sí, siempre", "A veces", "Rara vez", "No, me lo guardo"],
  },
  {
    id: 4,
    question:
      "Cuando te sentís mal, ¿qué hacés primero sin pensarlo demasiado?",
    options: [
      "Me aíslo",
      "Escribo o pienso mucho",
      "Hablo con alguien",
      "Intento distraerme con algo",
    ],
  },
  {
    id: 5,
    question: "¿Cuál de estas frases te representa más en este momento?",
    options: [
      "“A veces me cuesta saber cómo me siento”",
      "“Quiero entenderme mejor”",
      "“Solo quiero un poco de calma”",
      "“Estoy bien, pero quiero seguir creciendo”",
    ],
  },
  {
    id: 6,
    question: "¿Qué esperás de una app como esta?",
    options: [
      "Sentirme comprendido/a",
      "Tener claridad emocional",
      "Mejorar mi bienestar día a día",
      "Explorar nuevas formas de sentirme bien",
    ],
  },
  {
    id: 7,
    question:
      "¿Con qué frecuencia te tomás un momento para reflexionar sobre lo que sentís?",
    options: ["Casi nunca", "A veces", "Frecuentemente", "Todos los días"],
  },
  {
    id: 8,
    question:
      "¿Cuándo fue la última vez que te sentiste realmente vulnerable o emocional?",
    options: [
      "Esta semana",
      "Hace poco, pero lo olvidé rápido",
      "No lo recuerdo",
      "No suelo dejarme sentir así",
    ],
  },
];

const EmotionalCheck = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const userName = localStorage.getItem("userName");

  const handleAnswer = (option) => {
    const updatedAnswers = [
      ...answers,
      { question: questions[current].question, answer: option },
    ];
    setAnswers(updatedAnswers);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      console.log("Respuestas:", updatedAnswers);
    }
  };

  if (finished) {
    return (
      <div>
        <h2>¡Gracias por compartir! {userName}</h2>
        <p>Este es tu resumen inicial:</p>
        <ul>
          {answers.map((a, index) => (
            <li key={index}>
              <strong>{a.question}</strong> <br />
              Respuesta: {a.answer}
            </li>
          ))}
        </ul>
        <p>(Más adelante este perfil será analizado por la IA 😉)</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div>
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

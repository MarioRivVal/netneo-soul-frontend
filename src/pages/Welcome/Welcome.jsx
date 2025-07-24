import React from "react";
import styles from "./Welcome.module.css";
import Button from "../../components/Button";
import { useWelcomeHandler } from "./useWelcomeHandler";

const Welcome = () => {
  const { name, setName, handleStart } = useWelcomeHandler();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Bienvenido a tu espacio emocional 🌱</h1>
      <p className={styles.paragraph}>¿Cómo te gustaría que te llamemos?</p>
      <input
        id="name"
        type="text"
        className={styles.input}
        placeholder="Escribí tu nombre o alias"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleStart}>Comenzar</Button>
    </div>
  );
};

export default Welcome;

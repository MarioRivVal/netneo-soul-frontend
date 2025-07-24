import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalStorageItem } from "../../utils/localStorage";

export const useWelcomeHandler = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim() === "") return;

    setLocalStorageItem("username", name.trim());
    navigate("/emotional-questions");
  };

  return {
    name,
    setName,
    handleStart,
  };
};

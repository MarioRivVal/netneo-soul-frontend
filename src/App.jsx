import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Chat from "./pages/Chat";
import History from "./pages/History";
import EmotionalCheck from "./pages/EmotionalCheck";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/history" element={<History />} />
        <Route path="/emotional-check" element={<EmotionalCheck />} />
        {/* Ruta por defecto para manejar 404 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Chat from "./pages/Chat";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

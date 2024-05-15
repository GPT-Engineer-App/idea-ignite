import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AIPrompt from "./pages/AIPrompt.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/ai-prompt" element={<AIPrompt />} />
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AIPrompt from "./pages/AIPrompt.jsx";
import Navigation from "./components/Navigation.jsx";
import CreativeProfessionals from "./pages/CreativeProfessionals.jsx";
import StudentsResearchers from "./pages/StudentsResearchers.jsx";
import BusinessProfessionals from "./pages/BusinessProfessionals.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/ai-prompt" element={<AIPrompt />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/creative-professionals" element={<CreativeProfessionals />} />
        <Route exact path="/students-researchers" element={<StudentsResearchers />} />
        <Route exact path="/business-professionals" element={<BusinessProfessionals />} />
      </Routes>
    </Router>
  );
}

export default App;

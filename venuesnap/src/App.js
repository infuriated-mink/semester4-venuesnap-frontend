import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import EditEvent from "./components/editEvent";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/edit/:id" element={<EditEvent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

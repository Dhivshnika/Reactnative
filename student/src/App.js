import React from "react";
import Course from "./screens/Course/Course";
import Enroll from "./screens/Enroll/Enroll";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
    </Router>
  );
}

export default App;

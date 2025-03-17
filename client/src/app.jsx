import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/Background";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import EducationPage from "./pages/EducationPage";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <div>
      <Background />

      {/* Main Navigation */}
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        {/* Hidden: no NavBar link to /login */}
        <Route path="/login" element={<LoginPage />} />
        {/* Admin route: only accessible if logged in */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

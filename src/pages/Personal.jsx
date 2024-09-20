import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import PersonalPage from "../components/usuarios/personal/PersonalPage";

const Personal = () => {
  return (
    <div className="sections-wrapper">
      <Dashboard />
      <PersonalPage />
    </div>
  );
};

export default Personal;

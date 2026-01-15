import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/dashboard";
import ExplorePage from "./pages/explorPage";
import ProfilePage from "./pages/profilePage";
import "./App.css";
import { useEffect } from "react";
import { initRequestStorage } from "./services/requestService";

function App() {
  useEffect(() => {
    async function init() {
      const existing = localStorage.getItem("artisanRequest");

      // Initialize storage if empty
      await initRequestStorage();

      // Reload page only if storage was just seeded
      if (!existing && !sessionStorage.getItem("pageReloaded")) {
        sessionStorage.setItem("pageReloaded", "true");
        window.location.reload();
      }
    }

    init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="artisans" element={<ExplorePage />} />
        <Route path="artisan/:id" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;


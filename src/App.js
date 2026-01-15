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
    initRequestStorage();
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


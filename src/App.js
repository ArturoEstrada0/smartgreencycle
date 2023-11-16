// En src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import CalorieCounter from './components/CalorieCounter/CalorieCounter';
import BatteryLevel from './components/BatteryLevel/BatteryLevel';
import RouteMap from './components/RouteMap/RouteMap';
import Settings from './components/Settings/Settings';
// Importar los componentes de estadísticas
import Overview from './components/Stats/Overview/Overview'; // importación por defecto
import RoutesHistory from './components/Stats/RoutesHistory/RoutesHistory';
import PerformanceAnalysis from './components/Stats/PerformanceAnalysis/PerformanceAnalysis';
import Trends from './components/Stats/Trends/Trends';
import Goals from './components/Stats/Goals/Goals';
import Health from './components/Stats/Health/Health';
import Social from './components/Stats/Social/Social';
import ExportData from './components/Stats/Export/Export';
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/battery" element={<BatteryLevel />} />
        <Route path="/map" element={<RouteMap />} />
        <Route path="/settings" element={<Settings />} />
        {/* Rutas para las secciones de estadísticas */}
        <Route path="/stats/overview" element={<Overview />} />
        <Route path="/stats/routes" element={<RoutesHistory />} />
        <Route path="/stats/performance" element={<PerformanceAnalysis />} />
        <Route path="/stats/trends" element={<Trends />} />
        <Route path="/stats/goals" element={<Goals />} />
        <Route path="/stats/health" element={<Health />} />
        <Route path="/stats/social" element={<Social />} />
        <Route path="/stats/export" element={<ExportData />} />
      </Routes>
    </Router>
  );
}

export default App;

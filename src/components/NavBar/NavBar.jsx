// En src/components/NavBar/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./NavBar.css"; // Asegúrate de tener estilos adecuados para NavBar

function NavBar() {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Inicio</Link>
      </Menu.Item>
      <Menu.SubMenu key="stats" title="Estadísticas">
        <Menu.Item key="overview">
          <Link to="/stats/overview">Resumen General</Link>
        </Menu.Item>
        <Menu.Item key="routes">
          <Link to="/stats/routes">Historial de Rutas</Link>
        </Menu.Item>
        <Menu.Item key="performance">
          <Link to="/stats/performance">Análisis de Rendimiento</Link>
        </Menu.Item>
        <Menu.Item key="trends">
          <Link to="/stats/trends">Tendencias</Link>
        </Menu.Item>
        <Menu.Item key="goals">
          <Link to="/stats/goals">Objetivos y Logros</Link>
        </Menu.Item>
        <Menu.Item key="health">
          <Link to="/stats/health">Estado de Salud</Link>
        </Menu.Item>
        <Menu.Item key="social">
          <Link to="/stats/social">Integración Social</Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to="/stats/settings">Personalización</Link>
        </Menu.Item>
        <Menu.Item key="export">
          <Link to="/stats/export">Exportar Datos</Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="map">
        <Link to="/map">Mapa</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/settings">Configuración</Link>
      </Menu.Item>
      {/* Otros elementos del menú */}
    </Menu>
  );
}

export default NavBar;

// En src/components/Stats/RoutesHistory/RoutesHistory.js

import React, { useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './RoutesHistory.css';

const routesData = [
  { fecha: '2023-03-01', distancia: 14, duracion: '45 min', comentarios: 'Ruta matutina por el parque' },
  { fecha: '2023-03-03', distancia: 18, duracion: '60 min', comentarios: 'Ruta vespertina con amigos' },
  // Añadir más rutas aquí
];

function RoutesHistory() {
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Renderizar mapa para la ruta seleccionada
  const renderSelectedRouteMap = () => {
    if (!selectedRoute) return null;

    return (
      <MapContainer center={selectedRoute.coordenadas[0]} zoom={13} style={{ height: '250px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={selectedRoute.coordenadas} color="blue" />
      </MapContainer>
    );
  };

  return (
    <div className="routes-history-container">
      <h2>Historial de Rutas</h2>
      <p>Selecciona una ruta para ver más detalles.</p>
      <ul>
        {routesData.map((route) => (
          <li 
            key={route.id} 
            onClick={() => setSelectedRoute(route)}
            className={selectedRoute && selectedRoute.id === route.id ? 'selected' : ''}
          >
            <p><strong>Fecha:</strong> {route.fecha}</p>
            <p><strong>Distancia:</strong> {route.distancia} km</p>
            <p><strong>Duración:</strong> {route.duracion}</p>
            <p><strong>Comentarios:</strong> {route.comentarios}</p>
          </li>
        ))}
      </ul>
      <div className="selected-route-map">
        {renderSelectedRouteMap()}
      </div>
    </div>
  );
}

export default RoutesHistory;

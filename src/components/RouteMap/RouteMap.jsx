// En src/components/RouteMap/RouteMap.js

import React from 'react';
import { MapContainer, TileLayer, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const AdjustMapView = ({ route }) => {
  const map = useMap();

  React.useEffect(() => {
    if (route && route.length > 0) {
      const bounds = route.map(point => [point.lat, point.lng]);
      map.fitBounds(bounds);
    }
  }, [route, map]);

  return null;
};

function RouteMap() {
  // Coordenadas de ejemplo en Morelia, Michoacán
  const routeData = [
    { lat: 19.70078, lng: -101.18443 }, // Punto de inicio
    { lat: 19.70358, lng: -101.19252 }, // Punto intermedio
    { lat: 19.71049, lng: -101.19452 }  // Punto final
  ];

  const center = [19.70078, -101.18443]; // Centro inicial del mapa
  const zoomLevel = 13; // Nivel de zoom inicial

  return (
    <MapContainer center={center} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline pathOptions={{ color: 'blue' }} positions={routeData.map(point => [point.lat, point.lng])} />
      <AdjustMapView route={routeData} />
    </MapContainer>
  );
}

export default RouteMap;

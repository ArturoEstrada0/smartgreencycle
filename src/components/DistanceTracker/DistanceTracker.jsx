// En src/components/DistanceTracker/DistanceTracker.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './DistanceTracker.css'; // Asegúrate de tener este archivo CSS en tu proyecto

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value} km`}</p>
      </div>
    );
  }

  return null;
}

function DistanceTracker() {
  const dailyDistances = [
    { fecha: '2023-01-01', distancia: 14 },
    { fecha: '2023-01-02', distancia: 18 },
    { fecha: '2023-01-03', distancia: 12 },
    // ... más datos
  ];

  const totalDistance = dailyDistances.reduce((sum, record) => sum + record.distancia, 0);

  return (
    <div className="distance-tracker-container">
      <h3 className="distance-tracker-title">Distancia Total Recorrida: {totalDistance} km</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dailyDistances} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis label={{ value: 'Distancia (km)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="distancia" stroke="#82ca9d" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DistanceTracker;

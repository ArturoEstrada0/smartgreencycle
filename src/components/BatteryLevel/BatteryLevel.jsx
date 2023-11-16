// En src/components/BatteryLevel/BatteryLevel.js

import React from 'react';
import { FaBatteryFull, FaBatteryThreeQuarters, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from 'react-icons/fa';
import './BatteryLevel.css';

function BatteryLevel({ batteryPercentage = 45 }) {
  let batteryColor = '#4caf50'; // Verde para niveles altos
  let batteryIcon = <FaBatteryFull />;
  if (batteryPercentage < 20) {
    batteryColor = '#f44336'; // Rojo para niveles bajos
    batteryIcon = <FaBatteryEmpty />;
  } else if (batteryPercentage < 50) {
    batteryColor = '#ff9800'; // Naranja para niveles medios
    batteryIcon = batteryPercentage < 25 ? <FaBatteryQuarter /> : <FaBatteryHalf />;
  }

  return (
    <div className="battery-level-container">
      <h3>Nivel de Batería {batteryIcon}</h3>
      <div className="battery-indicator">
        <div 
          className="battery-fill" 
          style={{ width: `${batteryPercentage}%`, backgroundColor: batteryColor }}
        ></div>
      </div>
      <p>{batteryPercentage}% Restante</p>
    </div>
  );
}

export default BatteryLevel;

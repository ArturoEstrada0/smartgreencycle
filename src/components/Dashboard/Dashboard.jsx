// En src/components/Dashboard/Dashboard.js

import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd'; // Usando componentes de Ant Design
import DistanceTracker from '../DistanceTracker/DistanceTracker';
import CalorieCounter from '../CalorieCounter/CalorieCounter';
import BatteryLevel from '../BatteryLevel/BatteryLevel';
import RouteMap from '../RouteMap/RouteMap';
import './Dashboard.css';

function Dashboard() {
  // Ejemplo de estado (ajustar según los datos reales que tengas)
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);
  const [batteryLevel, setBatteryLevel] = useState(0);

  useEffect(() => {
    // Aquí podrías cargar los datos iniciales, por ejemplo, desde una API
  }, []);

  return (
    <div className="dashboard">
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Distancia Recorrida">
            <DistanceTracker distance={distance} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Calorías Quemadas">
            <CalorieCounter calories={calories} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Nivel de Batería">
            <BatteryLevel level={batteryLevel} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Card title="Mapa de Ruta">
            <RouteMap />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;

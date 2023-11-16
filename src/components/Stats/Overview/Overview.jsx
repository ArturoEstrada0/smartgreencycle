// En src/components/Stats/Overview/Overview.js

import React from "react";
import { Card, Row, Col, Statistic, Divider } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./Overview.css";

const LineChartExample = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="distancia" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

const BarChartExample = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="fecha" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="calorias" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

const generarConsejos = (datos) => {
  let consejos = [];

  if (datos.distanciaSemanal < datos.objetivoSemanal) {
    consejos.push(
      "¡Estás cerca de alcanzar tu objetivo semanal de distancia! Intenta una ruta corta para lograrlo."
    );
  } else {
    consejos.push(
      "¡Excelente trabajo alcanzando tu objetivo de distancia semanal!"
    );
  }

  if (datos.caloriasQuemadas > 2000) {
    consejos.push(
      "Has quemado muchas calorías esta semana, ¡buen trabajo manteniendo la actividad!"
    );
  }

  // Añadir más lógica para consejos aquí

  return consejos;
};

function Overview() {
  // Datos de ejemplo para los gráficos
  const datosDeLinea = [
    { fecha: "2023-03-01", distancia: 14 },
    { fecha: "2023-03-02", distancia: 18 },
    { fecha: "2023-03-03", distancia: 12 },
    { fecha: "2023-03-04", distancia: 23 },
    { fecha: "2023-03-05", distancia: 17 },
  ];

  const datosDeBarra = [
    { fecha: "2023-03-01", calorias: 220 },
    { fecha: "2023-03-02", calorias: 250 },
    { fecha: "2023-03-03", calorias: 180 },
    { fecha: "2023-03-04", calorias: 300 },
    { fecha: "2023-03-05", calorias: 275 },
  ];

  // Datos simulados para generar consejos
  const datosDeActividad = {
    distanciaSemanal: 50,
    objetivoSemanal: 60,
    caloriasQuemadas: 2500,
  };

  const consejos = generarConsejos(datosDeActividad);

  return (
    <div className="overview-container">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Distancia Total" value={120} suffix="km" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Calorías Quemadas" value={3500} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Tiempo Total" value={720} suffix="min" />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Total de Viajes" value={15} />
          </Card>
        </Col>
      </Row>

      <Divider>Estadísticas Detalladas</Divider>

      <LineChartExample data={datosDeLinea} />
      <BarChartExample data={datosDeBarra} />

      <Divider>Consejos y Sugerencias</Divider>
      <div className="suggestions-section">
        <ul>
          {consejos.map((consejo, index) => (
            <li key={index}>{consejo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Overview;

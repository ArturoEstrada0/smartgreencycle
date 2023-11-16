import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './CalorieCounter.css';

function CalorieCounter({ caloriesData = [{ fecha: '2023-01-01', calorias: 200 }, { fecha: '2023-01-02', calorias: 250 }, { fecha: '2023-01-03', calorias: 170 }] }) {
  const totalCalories = caloriesData.reduce((sum, record) => sum + record.calorias, 0);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label} : ${payload[0].value} cal`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="calorie-counter-container">
      <h3>Total de Calorías Quemadas: {totalCalories}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={caloriesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="fecha" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="calorias" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CalorieCounter;

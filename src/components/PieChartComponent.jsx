import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from 'recharts';
import { Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// const data = [
//   { name: 'Category A', value: 400 },
//   { name: 'Category B', value: 300 },
//   { name: 'Category C', value: 300 },
//   { name: 'Category D', value: 200 },
// ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = () => {

  // Intergration of my inventory data here
  const inventoryItems = useSelector((state) => state.inventory.items);

  const data = inventoryItems.map((item) => ({
    name: item.name,
    value: item.quantity, // We are assuming 'quantity' for pie chart; adjust if needed
  }));
 

  // Card dimensions
  const cardWidth = 300; // Adjust this based on your card size
  const cardHeight = 300; // Adjust this based on your card size

  return (
    <Paper 
      style={{ 
        padding: '20px', 
        textAlign: 'center', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px',
        height: '100%', // Ensures Paper takes the full height of the card
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sales Distribution
      </Typography>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '220px' // Adjusted to fit within the Paper
      }}>
        <PieChart width={cardWidth - 40} height={cardHeight - 80}> {/* Adjusted for padding */}
          <Pie
            data={data}
            cx={50} // Centering the pie chart horizontally
            cy={50} // Centering the pie chart vertically
            labelLine={false}
            label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </Paper>
  );
};

export default PieChartComponent;

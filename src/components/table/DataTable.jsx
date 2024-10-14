import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const DataTable = () => {
  // Sample data for the table
  const rows = [
    { id: 1, product: 'Laptop', category: 'Electronics', stock: 35, sales: 10 },
    { id: 2, product: 'Sofa', category: 'Furniture', stock: 14, sales: 5 },
    { id: 3, product: 'T-shirt', category: 'Clothing', stock: 50, sales: 20 },
    { id: 4, product: 'Headphones', category: 'Electronics', stock: 25, sales: 8 },
  ];

  return (
    <TableContainer component={Paper} elevation={3} style={{ marginTop: '20px' }}>
      <Typography variant="h6" component="div" style={{ padding: '16px' }}>
        Inventory Report
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>ID</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Product</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Category</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Stock</TableCell>
            <TableCell style={{ fontWeight: 'bold', backgroundColor: '#f5f5f5' }}>Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.product}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.stock}</TableCell>
              <TableCell>{row.sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

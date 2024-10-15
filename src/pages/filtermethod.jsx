import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Reports = () => {
  
  const rows = useSelector((state) => state.report.items);
  const dispatch = useDispatch();
// for appl

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
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

export default Reports;

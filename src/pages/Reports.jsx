import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Reports = () => {
  // Sample data for the table
  // const rows = [
  //   { id: 1, product: 'Laptop', category: 'Electronics', stock: 35, sales: 10 },
  //   { id: 2, product: 'Sofa', category: 'Furniture', stock: 14, sales: 5 },
  //   { id: 3, product: 'T-shirt', category: 'Clothing', stock: 50, sales: 20 },
  //   { id: 4, product: 'Headphones', category: 'Electronics', stock: 25, sales: 8 },
  // ];
  // const rows=useSelector((state) =>state.Reports.items)
  const rows = useSelector((state) => state.report.items);
  const dispatch = useDispatch();


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

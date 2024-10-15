import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

const Reports = () => {
  const rows = useSelector((state) => state.report.items);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

  // Handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter rows based on search term and selected category
  const filteredRows = rows.filter((row) => {
    const matchesSearchTerm =
      row.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || row.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <>
      {/* Category Filter */}
      <FormControl fullWidth style={{ marginBottom: '20px', width:'300px'}}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={handleCategoryChange}
          label="Category"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Clothing">Clothing</MenuItem>
        </Select>
      </FormControl>

      {/* Table */}
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
            {filteredRows.length > 0 ? (
              filteredRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>{row.sales}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Reports;

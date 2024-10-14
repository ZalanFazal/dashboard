// AddInventoryItem.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Grid, Typography } from '@mui/material';

const AddInventoryItem = ({ onAddItem }) => {
  const formik = useFormik({
    initialValues: {
      itemName: '',
      quantity: '',
      price: ''
    },
    validationSchema: Yup.object({
      itemName: Yup.string()
        .required('Item Name is required'),
      quantity: Yup.number()
        .required('Quantity is required')
        .positive('Quantity must be greater than 0')
        .integer('Quantity must be an integer'),
      price: Yup.string()
        .required('Price is required')
    }),
    onSubmit: (values, { resetForm }) => {
      // Create a new item object
      const newItem = {
        id: Date.now(), // You can use a better ID generation method in production
        name: values.itemName,
        quantity: parseInt(values.quantity, 10),
        price: values.price
      };

      // Call the onAddItem function passed from the Inventory component
      onAddItem(newItem);

      // Reset the form
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" gutterBottom>
        Add New Inventory Item
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            name="itemName"
            value={formik.values.itemName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.itemName && Boolean(formik.errors.itemName)}
            helperText={formik.touched.itemName && formik.errors.itemName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Quantity"
            variant="outlined"
            type="number"
            fullWidth
            name="quantity"
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.quantity && Boolean(formik.errors.quantity)}
            helperText={formik.touched.quantity && formik.errors.quantity}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Price"
            variant="outlined"
            type="text"
            fullWidth
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Item
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddInventoryItem;

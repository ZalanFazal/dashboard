import React from 'react';
import { Typography, Paper, Grid, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postData } from '../apiService/api';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name should be at least 2 characters long')
    .required('Name is required'),
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be at least 8 characters long')
    .required('Password is required')
});

const Settings = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      // console.log('Form Data Submitted:', values);
      // Example: Save to local storage
      localStorage.setItem('submit', JSON.stringify(values));

      // Retrieve and log the stored data to confirm it's saved
      const storedData = localStorage.getItem('submit');
      console.log('Data in LocalStorage:', JSON.parse(storedData)); 
      // By this way we can send data to the API by path which provide by the backend developer
      postData("/path",values)
    },
  });

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h6">Profile Settings</Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                value={formik.values.name}
                
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
            type="submit"
          >
            Save Changes
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Settings;

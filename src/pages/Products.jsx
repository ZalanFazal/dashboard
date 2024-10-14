import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {storeProducts } from '../features/product/ProductSlice';  // Adjust path if necessary
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress, Container } from '@mui/material';
import { getData } from '../apiService/api';

const Products = () => {
  const dispatch = useDispatch();
  
  // Selectors to access the products, status, and error from the Redux state
  const {products} = useSelector((state) => state?.products); //object destructuring
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  
  // Dispatch the fetchProducts thunk on component mountstate
  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  
  useEffect(()=>{
    
    // only input the path of api here coz we already declare in getData easily
      getData("/products").then(res=>{
        console.log(res)
        dispatch(storeProducts(res))
      }).catch(err=>{
        console.log(err)
      })
  },[])


  // Render logic based on product status

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products?.map(product=>(
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 250, minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ objectFit: 'contain', height: 150 }}  // Adjust height and object-fit to ensure the image fits well
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" color="text.primary">
            {product.price} USD
          </Typography>
        </CardContent>
      </Card>
    </Grid>
        ))}
      
      </Grid>
    </Container>
  );
};

export default Products;

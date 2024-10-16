import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storeProducts } from '../features/product/ProductSlice';
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { apiService } from '../apiService/apiService';  // Import the apiService

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiService.get('/products');  // Use the centralized GET method
        dispatch(storeProducts(data));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products?.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 250, minHeight: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain', height: 150 }}
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

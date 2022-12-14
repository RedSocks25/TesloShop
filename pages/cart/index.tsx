import React from 'react';

import { Grid, Typography, Card, CardContent, Divider, Box, Button } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart/OrderSummary';


const CartPage = () => {
  return (
    <ShopLayout title='Cart - 3' pageDescription='Shopping cart'>
      <Typography variant='h1' component='h1'>Cart</Typography>

      <Grid container>
      
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>

              <Typography variant='h2'>Your order</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Checkout
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      
      </Grid>
    </ShopLayout>
  );
}

export default CartPage;
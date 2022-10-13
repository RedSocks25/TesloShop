import React from 'react';

import NextLink from 'next/link';

import { Box, Card, CardContent, Divider, Grid, Typography, Link, Chip } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout title='Order 21532' pageDescription='Order Summary'>
      <Typography variant='h1' component='h1'>Order: abc123</Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label='Waiting for payment'
        variant='outlined'
        color='error'
        icon={ <CreditCardOffOutlined /> }
      /> */}
      <Chip
        sx={{ my: 2 }}
        label='Order successfully paid'
        variant='outlined'
        color='success'
        icon={ <CreditScoreOutlined /> }
      />

      <Grid container>
      
        <Grid item xs={ 12 } sm={ 7 }>
          <CartList />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Card className='summary-card'>
            <CardContent>

              <Typography variant='h2'>Summary (3 products)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='subtitle1'>Delivery Address</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>
                    Edit
                  </Link>
                </NextLink>
              </Box>
              
              <Typography>Nicolás Selman Morales</Typography>
              <Typography>2416 16th St NW</Typography>
              <Typography>Calgary, AB T5E 3Z2</Typography>
              <Typography>Canada</Typography>
              <Typography>+1 (587) 966-7254</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant='subtitle1'>Order Details</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>
                    Edit
                  </Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                {/* TODO */}
                <h1>Pay order</h1>

                <Chip
                  sx={{ my: 2 }}
                  label='Order successfully paid'
                  variant='outlined'
                  color='success'
                  icon={ <CreditScoreOutlined /> }
                />
              </Box>

            </CardContent>
          </Card>
        </Grid>
      
      </Grid>
    </ShopLayout>
  );
}

export default OrderPage;
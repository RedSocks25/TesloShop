import React from 'react';

import NextLink from 'next/link';

import { Box, Card, CardContent, Divider, Grid, Typography, Button, Link } from '@mui/material';

import { ShopLayout } from '../../components/layouts';
import { CartList } from '../../components/cart';
import { OrderSummary } from '../../components/cart';

const SummaryPage = () => {
  return (
    <ShopLayout title='Order Summary' pageDescription='Order Summary'>
      <Typography variant='h1' component='h1'>Order Summary</Typography>

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
                <Button color='secondary' className='circular-btn' fullWidth>
                  Confirm Order
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      
      </Grid>
    </ShopLayout>
  );
}

export default SummaryPage;
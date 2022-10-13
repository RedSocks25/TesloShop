import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export const OrderSummary = () => {
  return (
    <Grid container>

      <Grid item xs={ 6 }>
        <Typography>No. of products</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>3</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>{ `$${ 155.36 }`}</Typography>
      </Grid>

      <Grid item xs={ 6 }>
        <Typography>Taxes (15%)</Typography>
      </Grid>
      <Grid item xs={ 6 } display='flex' justifyContent='end'>
        <Typography>{ `$${ 23.304 }`}</Typography>
      </Grid>

      <Grid item xs={ 6 } sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total to pay</Typography>
      </Grid>
      <Grid item xs={ 6 } sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{ `$${ 178.664 }`}</Typography>
      </Grid>

    </Grid>
  );
}
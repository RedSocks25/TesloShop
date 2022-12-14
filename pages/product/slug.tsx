import React from 'react';

import { Button, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { ShopLayout } from '../../components/layouts';
import { ProductSlideshow } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { initialData } from '../../database/products';
import { SizeSelector } from '../../components/products/SizeSelector';


const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <Grid container spacing={ 3 }>

        <Grid item xs={ 12 } sm={ 7 }>
          <ProductSlideshow images={ product.images } />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>
            {/* Title */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${ product.price }` }</Typography>

            {/* Quantity */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Quantity</Typography>
              
              <ItemCounter />

              <SizeSelector sizes={ product.sizes } />
            
            </Box>

            {/* Add to cart */}
            <Button color='secondary' className='circular-btn'>
              Add to cart
            </Button>

            {/* <Chip label='No stock' color='error' variant='outlined' /> */}

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Description</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  );
}

export default ProductPage;
import type { NextPage } from 'next';

import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts/ShopLayout';
import { initialData } from '../database/products';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo Shop - Home'} pageDescription={'Find the best products here'}>

      {/* component H1 help the SEO to know that this is a title and is important */}
      <Typography variant='h1' component='h1'>HomePage</Typography> 
      <Typography variant='h2' sx={{ mb: 1 }}>All the products</Typography> 

      <Grid container spacing={ 4 }>
        { initialData.products.map(product => (
          <Grid item xs={ 6 } sm={ 4 } key={ product.slug }>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={ `products/${ product.images[0] }` }
                  alt={ product.title }
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        
      </Grid>
    
    </ShopLayout>
  );
}

export default Home

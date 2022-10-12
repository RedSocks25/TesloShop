import type { NextPage } from 'next';

import { Typography } from '@mui/material';

import { ShopLayout } from '../components/layouts/ShopLayout';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Teslo Shop - Home'} pageDescription={'Find the best products here'}>

      {/* component H1 help the SEO to know that this is a title and is important */}
      <Typography variant='h1' component='h1'>HomePage</Typography> 
      <Typography variant='h2' sx={{ mb: 1 }}>All the products</Typography> 
    
    </ShopLayout>
  );
}

export default Home

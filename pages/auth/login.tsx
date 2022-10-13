import React from 'react';

import NextLink from 'next/link';

import { Grid, Typography, TextField, Button, Link, Box } from '@mui/material';

import { AuthLayout } from '../../components/layouts';


const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>

        <Grid container spacing={ 2 }>

          <Grid item xs={ 12 }>
            <Typography variant='h1' component='h1'>Login</Typography>
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label='Email' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField label='Password' type='password' variant='filled' fullWidth />
          </Grid>

          <Grid item xs={ 12 }>
            <Button color='secondary' className='circular-btn' fullWidth size='large'>
              Submit
            </Button>
          </Grid>

          <Grid item xs={ 12 } justifyContent='end' display='flex'>
            <NextLink href='/auth/register' passHref>
              <Link underline='always'>
                No account? Create one
              </Link>
            </NextLink>
          </Grid>

        </Grid>

      </Box>
    </AuthLayout>
  );
}

export default LoginPage;
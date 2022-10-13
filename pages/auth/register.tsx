import React from 'react';

import NextLink from 'next/link';

import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../../components/layouts';


const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>
      <Box sx={{ width: 350, padding: '10px 20px' }}>

      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 }>
          <Typography variant='h1' component='h1'>Create Account</Typography>
        </Grid>

        <Grid item xs={ 12 }>
          <TextField label='Full name' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 }>
          <TextField label='Email' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 }>
          <TextField label='Password' type='password' variant='filled' fullWidth />
        </Grid>

        <Grid item xs={ 12 }>
          <Button color='secondary' className='circular-btn' fullWidth size='large'>
            Register
          </Button>
        </Grid>

        <Grid item xs={ 12 } justifyContent='end' display='flex'>
          <NextLink href='/auth/login' passHref>
            <Link underline='always'>
              Have an account?
            </Link>
          </NextLink>
        </Grid>

      </Grid>

      </Box>
    </AuthLayout>
  );
}

export default RegisterPage;
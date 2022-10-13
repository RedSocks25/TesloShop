import React from 'react';

import NextLink from 'next/link';

import { Chip, Grid, Link, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';

import { ShopLayout } from '../../components/layouts';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Full Name', width: 300 },
  {
    field: 'paid',
    headerName: 'Paid',
    description: 'Shows is the order was paid',
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      return (
        params.row.paid
          ? <Chip color='success' label='paid' variant='outlined' />
          : <Chip color='error' label='payment pending' variant='outlined' />
      )
    }
  },
  {
    field: 'order',
    headerName: 'View order',
    width: 200,
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${ params.row.id }`} passHref>
          <Link underline='always'>
            View order
          </Link>
        </NextLink>
      )
    }
  },
]

const rows = [
  { id: 1, paid: false, fullname: 'Nicolás Selman Morales' },
  { id: 2, paid: true, fullname: 'Oliver Stehr' },
  { id: 3, paid: true, fullname: 'Laura Carrillo' },
  { id: 4, paid: false, fullname: 'Natalia Morales' },
]

const HistoryPage = () => {
  return (
    <ShopLayout title='Orders History' pageDescription='User all orders history'>
      <Typography variant='h1' component='h1'>Orders History</Typography>

      <Grid container>
        <Grid item xs={ 12 } sx={{ height: 650, width: '100%' }}>
          <DataGrid
            columns={ columns }
            rows={ rows }
            pageSize={ 10 }
            rowsPerPageOptions={ [10] }
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
}

export default HistoryPage;
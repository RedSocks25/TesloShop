import React, { FC } from 'react';

import { Box } from '@mui/system';

import { ISize } from '../../interfaces/products';
import { Button } from '@mui/material';


interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      { sizes.map( size => (
        <Button
          key={ size }
          size='small'
          color={ selectedSize === size ? 'primary' : 'info' }
        >
          { size }
        </Button>
      ))}
    </Box>
  );
}

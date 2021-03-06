import * as React from 'react';
import AppBar from './AppBar';
import Box from '@mui/material/Box';
import InputText from './InputText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ChatingList from './ChatingList';
import { position } from '@material-ui/system';
import { bottom } from '@material-ui/system';

export default function ButtonAppBar() {
  return (
      <Box>
      <AppBar />
      <Stack spacing={2}>
  	<ChatingList />
  	<InputText sx={{bottom: bottom}} />
      </Stack>
      </Box>
  );
}

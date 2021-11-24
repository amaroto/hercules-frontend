import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Dashboard from './components/dashboard/Dashboard';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Hercules Frontend'} {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Dashboard />
  );
}

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Dashboard from './components/dashboard/Dashboard';
import SignInSide from './components/sign-in-side/SignInSide';
import { Routes, Route, Link } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © Hercules Frontend'} {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (  
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<SignInSide />} />
    </Routes>
  );
}

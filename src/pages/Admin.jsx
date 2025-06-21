import React from 'react';
import { Box, Typography } from '@mui/material';
import AdminDashboard from '../features/admin/AdminDashboard';

const Admin = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <AdminDashboard />
    </Box>
  );
};

export default Admin;

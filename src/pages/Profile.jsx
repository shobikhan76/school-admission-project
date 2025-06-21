import React from 'react';
import { Box, Typography } from '@mui/material';
import StudentProfile from '../features/students/StudentProfile';

const Profile = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Student Profile
      </Typography>
      <StudentProfile />
    </Box>
  );
};

export default Profile;

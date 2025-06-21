import React from 'react';
import { Box, Typography } from '@mui/material';
import StudentForm from '../features/students/StudentsForm';

const Home = () => {
  return (
    <Box sx={{ p: 3 }}>
    
      <StudentForm />
    </Box>
  );
};

export default Home;

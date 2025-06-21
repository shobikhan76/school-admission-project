import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper, Grid, Alert } from '@mui/material';

const StudentProfile = () => {
  const studentData = useSelector((state) => state.student.studentData);

  if (!studentData) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="warning">No student data available. Please submit the form first.</Alert>
      </Box>
    );
  }

  const {
    name,
    age,
    grade,
    email,
    phone,
    gender,
    address
  } = studentData;

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Submitted Student Profile
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Name:</strong> {name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Age:</strong> {age}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Class/Grade:</strong> {grade}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Email:</strong> {email}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Phone:</strong> {phone}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"><strong>Gender:</strong> {gender}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"><strong>Address:</strong> {address}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StudentProfile;

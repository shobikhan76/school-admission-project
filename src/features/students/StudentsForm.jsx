import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submittedData } from './studentSlice';
import { addApplicant } from '../admin/adminSlice';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Alert,
} from '@mui/material';

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    grade: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false); // show message

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = 'Required';
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(submittedData(formData));
    dispatch(addApplicant(formData));
    setSubmitted(true); // show success message

    // wait 3 seconds, then go to profile
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
        Admission Form
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          🎉 Congratulations! Form Submitted.
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={!!errors.age}
              helperText={errors.age}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Grade / Class"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              error={!!errors.grade}
              helperText={errors.grade}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item>
            <TextField
              select
              fullWidth
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              error={!!errors.gender}
              helperText={errors.gender}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              multiline
              minRows={3}
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" fullWidth>
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default StudentForm;

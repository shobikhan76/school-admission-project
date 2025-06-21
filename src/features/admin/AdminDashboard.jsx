import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Typography,
  Grid,
  Alert,
  TextField,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ApplicantsCard from './ApplicantsCard';
const AdminDashboard = () => {
  const applicants = useSelector((state) => state.admin.applicants);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApplicants = applicants.filter((applicant) => {
    const term = searchTerm.toLowerCase();
    return (
      applicant.name.toLowerCase().includes(term) ||
      applicant.grade.toLowerCase().includes(term)
    );
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        All Submitted Applications
      </Typography>

      <TextField
        label="Search by Name or Grade"
        variant="outlined"
        fullWidth
        sx={{ my: 2 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />

      {filteredApplicants.length === 0 ? (
        <Alert severity="info">No applicants found.</Alert>
      ) : (
        <Grid container spacing={2}>
          {filteredApplicants.map((applicant) => (
            <Grid item xs={12} sm={6} md={4} key={applicant.id}>
              <ApplicantsCard applicant={applicant} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default AdminDashboard;

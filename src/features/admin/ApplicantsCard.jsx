import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteApplicant, editApplicant } from './adminSlice';

const ApplicantCard = ({ applicant }) => {
  const dispatch = useDispatch();

  const [openEdit, setOpenEdit] = useState(false);
  const [editedData, setEditedData] = useState(applicant);

  const handleDelete = () => {
    dispatch(deleteApplicant(applicant.id));
  };

  const handleEditOpen = () => {
    setOpenEdit(true);
  };

  const handleEditClose = () => {
    setOpenEdit(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    dispatch(editApplicant({ id: applicant.id, updatedData: editedData }));
    setOpenEdit(false);
  };

  return (
    <>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {applicant.name}
          </Typography>
          <Typography><strong>Age:</strong> {applicant.age}</Typography>
          <Typography><strong>Grade:</strong> {applicant.grade}</Typography>
          <Typography><strong>Email:</strong> {applicant.email}</Typography>
          <Typography><strong>Phone:</strong> {applicant.phone}</Typography>
          <Typography><strong>Gender:</strong> {applicant.gender}</Typography>
          <Typography><strong>Address:</strong> {applicant.address}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={handleEditOpen}>
            Edit
          </Button>
          <Button size="small" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      </Card>

    
      <Dialog open={openEdit} onClose={handleEditClose}>
        <DialogTitle>Edit Applicant</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={editedData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Age"
            name="age"
            type="number"
            value={editedData.age}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Grade"
            name="grade"
            value={editedData.grade}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Email"
            name="email"
            value={editedData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Phone"
            name="phone"
            value={editedData.phone}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Gender"
            name="gender"
            value={editedData.gender}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Address"
            name="address"
            value={editedData.address}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ApplicantCard;

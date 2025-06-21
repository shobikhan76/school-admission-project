import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  applicants: [], // List of all students
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addApplicant: (state, action) => {
      const newApplicant = { id: nanoid(), ...action.payload };
      state.applicants.push(newApplicant);
    },
    deleteApplicant: (state, action) => {
      state.applicants = state.applicants.filter(app => app.id !== action.payload);
    },
    editApplicant: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.applicants.findIndex(app => app.id === id);
      if (index !== -1) {
        state.applicants[index] = { ...state.applicants[index], ...updatedData };
      }
    },
  },
});

export const { addApplicant, deleteApplicant, editApplicant } = adminSlice.actions;
export default adminSlice.reducer;

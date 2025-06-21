import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../features/students/studentSlice'
import adminReducer from '../features/admin/adminSlice';

const store = configureStore({
  reducer: {
    student: studentReducer,
    admin: adminReducer,
  },
});

export default store;

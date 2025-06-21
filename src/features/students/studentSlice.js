import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: "student", 
    initialState : {
        studentData : null 
    },
    reducers : {
        submittedData : (state , action ) => {
            state.studentData = action.payload 
        },
        clearData : (state ) => {
            state.studentData = null
        }
    }
})
export const {submittedData , clearData } = studentSlice.actions 
export default studentSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const RocketReducer = createSlice({
    name: 'rockets',
    initialState:{
        allData: []
    },
    reducers:{
        AddRocket:(state, action)=>{
            state.allData = action.payload;
        }
    }
})
export const { AddRocket } = RocketReducer.actions;
export default RocketReducer.reducer;
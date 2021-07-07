import {createSlice} from '@reduxjs/toolkit'

export const idSlicer = createSlice({
    name:"id",
    initialState:{
        value: 3
    },
    reducers:{
        change_id:(state,action) =>{
            state.value = action.payload.id -1
        }
    }
})

export const {change_id} = idSlicer.actions

export default idSlicer.reducer
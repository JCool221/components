import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: JSON.parse(localStorage.getItem('selection')) || null,
}

export const selectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        setSelection: (state, action) => {
            state.selection = action.payload;
            localStorage.setItem('selection', JSON.stringify(action.payload));
        }
    }
})

export const {setSelection} = selectionSlice.actions

export default selectionSlice.reducer
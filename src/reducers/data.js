import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: null,
  reducers: {
    setData: (_, action) => action.payload,
  },
});

export const { setData } = dataSlice.actions;

export const selectData = (state) => state.data;

export default dataSlice.reducer;

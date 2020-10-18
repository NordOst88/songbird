import { createSlice } from '@reduxjs/toolkit';

const currentBirdSlice = createSlice({
  name: 'currentBird',
  initialState: null,
  reducers: {
    setCurrentBird: (_, action) => action.payload,
  },
});

export const { setCurrentBird } = currentBirdSlice.actions;

export const selectCurrentBird = (state) => state.currentBird;

export default currentBirdSlice.reducer;

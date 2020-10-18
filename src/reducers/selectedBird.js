import { createSlice } from '@reduxjs/toolkit';
import { SELECTED_BIRD_INIT_STATE } from '../constants';

const selectedBirdSlice = createSlice({
  name: 'selectedBird',
  initialState: SELECTED_BIRD_INIT_STATE,
  reducers: {
    setSelectedBird: (_, action) => action.payload,
    resetSelectedBird: () => SELECTED_BIRD_INIT_STATE,
  },
});

export const { setSelectedBird, resetSelectedBird } = selectedBirdSlice.actions;

export const selectSelectedBird = (state) => state.selectedBird;

export default selectedBirdSlice.reducer;

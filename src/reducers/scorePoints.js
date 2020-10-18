import { createSlice } from '@reduxjs/toolkit';
import { POINTS_INIT_STATE } from '../constants';

const scorePointsSlice = createSlice({
  name: 'scorePoints',
  initialState: POINTS_INIT_STATE,
  reducers: {
    decreasePoints: (state) => (state > 0 ? state - 1 : 0),
    resetPoints: () => POINTS_INIT_STATE,
  },
});

export const { decreasePoints, resetPoints } = scorePointsSlice.actions;

export const selectPoints = (state) => state.scorePoints;

export default scorePointsSlice.reducer;

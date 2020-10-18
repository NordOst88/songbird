import { createSlice } from '@reduxjs/toolkit';
import { SCORE_INIT_STATE } from '../constants';

const scoreCounterSlice = createSlice({
  name: 'scoreCounter',
  initialState: SCORE_INIT_STATE,
  reducers: {
    increaseScore: (state, action) => state + action.payload,
    resetScore: () => SCORE_INIT_STATE,
  },
});

export const { increaseScore, resetScore } = scoreCounterSlice.actions;

export const selectScore = (state) => state.scoreCounter;

export default scoreCounterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { ROUND_INIT_STATE } from '../constants';

const roundNumberSlice = createSlice({
  name: 'round',
  initialState: ROUND_INIT_STATE,
  reducers: {
    increaseRound: (state) => state + 1,
    resetRound: () => ROUND_INIT_STATE,
  },
});

export const { increaseRound, resetRound } = roundNumberSlice.actions;

export const selectRoundNumber = (state) => state.round;

export default roundNumberSlice.reducer;

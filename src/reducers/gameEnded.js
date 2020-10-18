import { createSlice } from '@reduxjs/toolkit';

const gameEndedSlice = createSlice({
  name: 'gameEnded',
  initialState: false,
  reducers: {
    toggleGameEnded: (state) => !state,
  },
});

export const { toggleGameEnded } = gameEndedSlice.actions;

export const selectGameEnded = (state) => state.gameEnded;

export default gameEndedSlice.reducer;

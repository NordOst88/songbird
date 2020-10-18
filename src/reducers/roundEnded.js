import { createSlice } from '@reduxjs/toolkit';

const roundEndedSlice = createSlice({
  name: 'roundEnded',
  initialState: false,
  reducers: {
    toggleRoundEnded: (state) => !state,
  },
});

export const { toggleRoundEnded } = roundEndedSlice.actions;

export const selectRoundEnded = (state) => state.roundEnded;

export default roundEndedSlice.reducer;

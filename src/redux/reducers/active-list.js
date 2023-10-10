import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeList:  "listAllMovies",
};

export const activeListSlice = createSlice({
  name: 'activeList',
  initialState,
  reducers: {
    openActiveList: (state, action) => {
      return {
        ...state,
        activeList: action.payload
      }
    }
  }
});


export const { openActiveList } = activeListSlice.actions;
export const activeListReducer = activeListSlice.reducer;
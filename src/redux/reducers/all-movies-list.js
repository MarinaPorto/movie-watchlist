import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allMovies: "",
};

export const moviesListSlice = createSlice({
  name: 'activeList',
  initialState,
  reducers: {
    setAllMovies: (state, action) => {
      return {
        ...state,
        allMovies: action.payload
      }
    }
  }
});


export const { setAllMovies } = moviesListSlice.actions;
export const moviesListReducer = moviesListSlice.reducer;
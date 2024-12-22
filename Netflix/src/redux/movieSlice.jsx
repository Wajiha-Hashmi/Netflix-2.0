import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovie: null,
    upComingMovie: null,
  },
  reducers: {
    //actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    getUpComingMovie: (state, action) => {
      state.upComingMovie = action.payload;
    },
  },
});
export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpComingMovie,
} = movieSlice.actions;
export default movieSlice.reducer;

import $host from './index.js';

export const addMovie = async (data) => {
  const response = await $host.post('api/movies', data)
  return response
}
export const addMovieToWatched = async (data) => {
  const response = await $host.post('api/moviesAddWatched', data)
  return response
}

export const getAllMovies = async () => {
  const response = await $host.get('api/allmovies')
  return response
}

export const getPlanned = async () => {
  const response = await $host.get('api/movies')
  return response
}

export const getWatched = async () => {
  const response = await $host.get('api/movieswatched')
  return response
}

export const deleteMovie = async (movieId) => {
  const response = await $host.delete(`api/movies/${movieId}`)
  return response
}

export const updateRating = async (data) => {
  const response = await $host.put('api/moviesRating', data)
  return response
}
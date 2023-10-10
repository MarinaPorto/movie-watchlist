
import styles from './movie-lists.module.css'
import { useSelector } from 'react-redux';
import MovieList from '../movie-list/movie-list';

export function MovieLists() {
  const movieList = useSelector(state => state.moviesList.allMovies);
  return (
    <div className={styles.wrapper}>
      <MovieList movieList={movieList} />
    </div>
  )
}

export default MovieLists;
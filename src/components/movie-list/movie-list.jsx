
import styles from './movie-list.module.css'
import { MovieCard } from '../movie-card/movie-card';

export function MovieList(props) {
  const moviesList = props.movieList;
  return (
    <div className={styles.wrapper}>
      {
        moviesList.length > 0 &&
        moviesList.map(movie => {
          return (
            <MovieCard movie={movie} />
          )
        })}
    </div>
  )
}

export default MovieList;
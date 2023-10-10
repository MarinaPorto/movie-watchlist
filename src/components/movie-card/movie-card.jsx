/* eslint-disable eqeqeq */

import styles from './movie-card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setAllMovies } from '../../redux/reducers/all-movies-list';
import { getProductStars } from "../../utils/getProductStars";
import { addMovie, addMovieToWatched, deleteMovie, updateRating } from '../../http/movieAPI';
import { useState } from 'react';
import trash from './img/trash.png';

export function MovieCard(props) {
  const activeList = useSelector(state => state.activeList.activeList);
  const [planStatus, setPlanStatus] = useState(false);
  const movie = props.movie;
  const dispatch = useDispatch();

  async function addMoviToWatch(id) {
    setPlanStatus(true)
    let idMovie = {
      "id": id
    }
    await addMovie(idMovie)
  }

  async function changeRating(rating) {
    let dataMovie = {
      "id": movie.id,
      "rating": rating,
    }
    let newrating = await updateRating(dataMovie)
    dispatch(setAllMovies(newrating.data))
  }

  async function addMoviToWatched(id) {
    let idMovieToWatch = {
      "id": id
    }
    let response = await addMovieToWatched(idMovieToWatch)
    dispatch(setAllMovies(response.data))
  }

  async function deleteMovieToWatch(movieId) {
    let response = await deleteMovie(movieId)
    dispatch(setAllMovies(response.data))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.movie_info}>
        <img className={styles.poster} src={movie.Poster} alt="poster" />
        <div className={styles.info}>
          <p className={styles.title}>{movie.Title}</p>
          <p className={styles.genre}>{movie.Genre}</p>
          {(activeList === 'listAllMovies' || activeList === 'listPlanMovies') &&
            <div className={styles.rating}><div className="review-block-stars">{getProductStars(movie.Rating)}</div></div>
          }
          {(activeList === 'listWatchedMovies') &&
            <div className={styles.info_rating}>
              Текущая оценка
              <div className={styles.rating}><div className="review-block-stars">{getProductStars(movie.Rating)}</div></div>
            </div>
          }
          {activeList === 'listWatchedMovies' &&
            <>
              Оценить фильм
              <div className="rating-area">
                <input type="radio" id={`star-5${movie.id}`} className="rating" name="rating" value="5" onClick={() => changeRating(5)} />
                <label htmlFor={`star-5${movie.id}`} title="Оценка «5»"></label>
                <input type="radio" id={`star-4${movie.id}`} className="rating" name="rating" value="4" onClick={() => changeRating(4)} />
                <label htmlFor={`star-4${movie.id}`} title="Оценка «4»"></label>
                <input type="radio" id={`star-3${movie.id}`} className="rating" name="rating" value="3" onClick={() => changeRating(3)} />
                <label htmlFor={`star-3${movie.id}`} title="Оценка «3»"></label>
                <input type="radio" id={`star-2${movie.id}`} className="rating" name="rating" value="2" onClick={() => changeRating(2)} />
                <label htmlFor={`star-2${movie.id}`} title="Оценка «2»"></label>
                <input type="radio" id={`star-1${movie.id}`} className="rating" name="rating" value="1" onClick={() => changeRating(1)} />
                <label htmlFor={`star-1${movie.id}`} title="Оценка «1»"></label>
              </div>
            </>
          }
          {(activeList === 'listAllMovies' && (movie.plan === "false" && planStatus == false)) && <div className={styles.btn} onClick={() => addMoviToWatch(movie.id)}>Хочу посмотреть</div>}
          {(activeList === 'listAllMovies' && (movie.plan === "true" || planStatus)) && <div className={styles.btn} >Добавлено</div>}
          <div className={styles.btns_wrapper}>
            {(activeList === 'listPlanMovies') && <div className={styles.btn} onClick={() => addMoviToWatched(movie.id)}>Добавить в "Просмотрено"</div>}
            {activeList === 'listPlanMovies' && <img className={styles.trash__icon} src={trash} title="удалить" alt="delete" onClick={() => deleteMovieToWatch(movie.id)}></img>}
          </div>
        </div>
      </div>
      <div className={styles.plot}>{movie.Plot}</div>
    </div>
  )
}

export default MovieCard;
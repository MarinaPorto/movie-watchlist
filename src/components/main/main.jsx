/* eslint-disable react-hooks/exhaustive-deps */

import styles from './main.module.css'
import Menu from '../menu/menu';
import MovieLists from '../movie-lists/movie-lists';
import { useDispatch } from 'react-redux';
import { getAllMovies } from '../../http/movieAPI';
import { useEffect } from 'react';
import { setAllMovies } from '../../redux/reducers/all-movies-list';
import mainBg from "./images/main-bg.png"


export function Main() {
  const dispatch = useDispatch();
  async function getListOfMovies() {
    try {
      const response = await getAllMovies();
      dispatch(setAllMovies(response.data))
    }
    catch (e) {
      console.log(e, "error")
      console.log(e.response?.data?.message)
    }
  }

  useEffect(() => {
    getListOfMovies()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Menu />
      <MovieLists />
      <img className={styles.img} src={mainBg} alt="bg" />
    </div>
  )
}

export default Main;
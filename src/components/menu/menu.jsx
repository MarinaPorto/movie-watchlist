
import styles from './menu.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { openActiveList } from '../../redux/reducers/active-list';
import { getAllMovies, getPlanned, getWatched } from '../../http/movieAPI';
import { setAllMovies } from '../../redux/reducers/all-movies-list';

export function Menu() {
  const activeList = useSelector(state => state.activeList.activeList);
  const dispatch = useDispatch();

  async function getListOfMovies(list) {
    changeList(list)
    try {
      const response = await getAllMovies();
      dispatch(setAllMovies(response.data))
    }
    catch (e) {
      console.log(e, "error")
      console.log(e.response?.data?.message)
    }
  }

  async function getListOfPlannedMovies(list) {
    changeList(list)
    try {
      const response = await getPlanned();
      dispatch(setAllMovies(response.data))
    }
    catch (e) {
      console.log(e, "error")
      console.log(e.response?.data?.message)
    }
  }

  async function getListOfWatchedMovies(list) {
    changeList(list)
    try {
      const response = await getWatched();
      dispatch(setAllMovies(response.data))
    }
    catch (e) {
      console.log(e, "error")
      console.log(e.response?.data?.message)
    }
  }

  function changeList(list) {
    dispatch(openActiveList(list))
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav}>
        <li className={activeList === 'listAllMovies' ? `${styles.nav__item} ${styles.nav__item_active}` : `${styles.nav__item} `} onClick={() => getListOfMovies("listAllMovies")}>Все фильмы</li>
        <li className={activeList === 'listPlanMovies' ? `${styles.nav__item} ${styles.nav__item_active}` : `${styles.nav__item} `} onClick={() => getListOfPlannedMovies("listPlanMovies")}>Хочу посмотреть</li>
        <li className={activeList === 'listWatchedMovies' ? `${styles.nav__item} ${styles.nav__item_active}` : `${styles.nav__item} `} onClick={() => getListOfWatchedMovies("listWatchedMovies")}>Просмотрено</li>
      </ul>
    </div>
  )
}

export default Menu;
import { Router } from "express";
import MovieController from "./controllers/movies-controller.js";
const router = new Router()

router.post('/movies', MovieController.addMovie)
router.post('/moviesAddWatched', MovieController.addMovieWatched)
router.get('/allmovies', MovieController.getAll)
router.get('/movies', MovieController.getPlaned)
router.get('/movieswatched', MovieController.getWatched)
router.put('/moviesRating', MovieController.updateRating)
router.delete('/movies/:movieId', MovieController.deleteOne)

export default router;  
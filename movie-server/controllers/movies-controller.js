import MovieService from '../services/movie-service.js';


class MovieController {
  async addMovie(req, res, next) {
    const { id } = req.body
    try {
      let movies = await MovieService.addMovie(id);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }
  async addMovieWatched(req, res, next) {
    const { id } = req.body
    try {
      let movies = await MovieService.addMovieWatched(id);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }
  async getAll(req, res, next) {
    try {
      let movies = await MovieService.getAll(req, res, next);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }
  async getPlaned(req, res, next) {
    try {
      let movies = await MovieService.getPlaned(req, res, next);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }
  async getWatched(req, res, next) {
    try {
      let movies = await MovieService.getWatched(req, res, next);
      return res.json(movies)
    } catch (e) {
      next(e)
    }

  }
  async updateRating(req, res, next) {
    const { id, rating } = req.body
    try {
      let movies = await MovieService.updateRating(id, rating);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }

  async deleteOne(req, res, next) {
    const id = req.params.movieId
    try {
      let movies = await MovieService.deleteOne(id);
      return res.json(movies)
    } catch (e) {
      next(e)
    }
  }
}



export default new MovieController()
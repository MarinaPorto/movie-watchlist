import MovieRepository from '../repository/movie-repository.js';
class MovieService {

  async addMovie(id) {
    try {
      let movies = await MovieRepository.addMovie(id);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "add movie error" })
    }
  }

  async addMovieWatched(id) {
    try {
      let movies = await MovieRepository.addMovieWatched(id);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "add movie to watched error" })
    }
  }

  async getAll(req, res, next) {
    try {
      let movies = await MovieRepository.getAll(req, res, next);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "get all movies error" })
    }
  }

  async getPlaned(req, res, next) {
    try {
      let movies = await MovieRepository.getPlaned(req, res, next);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "getting all scheduled movies error" })
    }
  }

  async getWatched(req, res, next) {
    try {
      let movies = await MovieRepository.getWatched(req, res, next);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "getting all watched movies error" })
    }
  }

  async deleteOne(id) {

    try {
      let movies = await MovieRepository.deleteOne(id);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "delete movie error" })
    }
  }

  async updateRating(id, rating) {
    try {
      let movies = await MovieRepository.updateRating(id, rating);
      return movies
    } catch (e) {
      return res.status(400).json({ message: "update rating error" })
    }
  }
}

export default new MovieService()
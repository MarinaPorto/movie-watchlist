import movies from "./movie.js";

let moviesList = movies;

class MovieRepository {

  async addMovie(id) {
    try {
      moviesList.forEach(movie => {
        if (movie.id === id) {
          movie.plan = "true";
        }
      })
      return moviesList
    } catch (e) {
      return res.status(400).json({ message: "add movie error" })
    }
  }

  async addMovieWatched(id) {
    let planWatch = [];
    try {
      moviesList.forEach(movie => {
        if (movie.id === id) {
          movie.watched = "true";
          movie.plan = "false";
        }
      })
      moviesList.forEach(movie => {
        if (movie.plan === "true") {
          planWatch.push(movie)
        }
      })
      return planWatch
    } catch (e) {
      return res.status(400).json({ message: "add movie to watched error" })
    }
  }

  async getAll(req, res, next) {
    try {
      return moviesList
    } catch (e) {
      return res.status(400).json({ message: "get all movies error" })
    }
  }

  async getPlaned(req, res, next) {
    let planWatch = [];
    try {
      moviesList.forEach(movie => {
        if (movie.plan === "true") {
          planWatch.push(movie)
        }
      })
      return planWatch
    } catch (e) {
      return res.status(400).json({ message: "getting all scheduled movies error" })
    }
  }

  async getWatched(req, res, next) {
    let planWatch = [];
    try {
      moviesList.forEach(movie => {
        if (movie.watched === "true") {
          planWatch.push(movie)
        }
      })
      return planWatch
    } catch (e) {
      return res.status(400).json({ message: "getting all watched movies error" })
    }
  }

  async deleteOne(id) {
    let planWatch = [];
    try {
      moviesList.forEach(movie => {
        if (movie.id === id) {
          movie.plan = "false";
        }
        if (movie.plan === "true") {
          planWatch.push(movie)
        }
      })
      return planWatch
    } catch (e) {
      return res.status(400).json({ message: "delete movie error" })
    }
  }

  async updateRating(id, rating) {
    let watchedMovies = [];
    try {
      moviesList.forEach(movie => {
        if (movie.id === id) {
          movie.Rating = rating;
        }
        if (movie.watched === "true") {
          watchedMovies.push(movie)
        }
      })
      return watchedMovies
    } catch (e) {
      return res.status(400).json({ message: "update rating error" })
    }
  }
}


export default new MovieRepository()
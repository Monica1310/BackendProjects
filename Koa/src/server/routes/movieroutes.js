const Router = require("koa-router");

const queries = require("../db/queries/movies");
// const { get } = require("./indexroutes");

const router = new Router();

const BASE_URL = "/api/movies";

//getting all movies
router.get(BASE_URL, async (res) => {
  const movies = await queries.getAllMovies();
  try {
    res.status = 200;
    res.body = { status: "successfull", data: movies };
  } catch (err) {
    console.log(err);
  }
});

// //getting single movie
router.get(`${BASE_URL}/:id`, async (res) => {
  try {
    const movie = await queries.getSingleMovie(res.params.id);

    res.body = {
      status: "success",
      data: movie,
    };
  } catch (err) {
    console.log(err);
  }
});

//post a movies
router.post(`${BASE_URL}`, async (res) => {
  try {
    const movie = await queries.addMovies(res.request.body);

    res.body = {
      status: "success",
      data: movie,
    };
  } catch (err) {
    console.log(err);
  }
});

//update
router.put(`${BASE_URL}/:id`, async (res) => {
  try {
    const movie = await queries.updateMovie(res.params.id, res.request.body);
    res.body = {
      status: "success",
      data: movie,
    };
  } catch (err) {
    console.log(err);
  }
});

//delete
router.delete(`${BASE_URL}/:id`, async (res) => {
  try {
    const movie = await queries.deleteMovie(res.params.id)
    res.body = {
      status: 'success',
      data: movie,
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

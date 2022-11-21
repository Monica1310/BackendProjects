const Koa = require("koa");
const indexRoutes = require("./routes/indexroutes");
const movieRoutes = require("./routes/movieroutes");
const bodyParser = require("koa-bodyparser");

const app = new Koa();

const PORT = 8000;

app.use(bodyParser());
app.use(indexRoutes.routes());

app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});

module.exports = server;

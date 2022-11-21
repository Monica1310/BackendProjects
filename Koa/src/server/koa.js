const Koa = require("koa");

const Router = require("koa-router");

const Logger = require("koa-logger");

const app = new Koa();

const router = new Router();
router.get("/", async (c) => {
  c.body = "Hello, World!\n";
});

// Response by name to the GET requests, :name is URL fragment/argument
router.get("/:name", async (c) => {
  c.body = `Hello, ${ctx.params.name}!\n`;
});

// Development logging
app.use(Logger());
// Add routes and response to the OPTIONS requests
app.use(router.routes()).use(router.allowedMethods());

// Listen the port
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

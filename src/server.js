const express = require("express");
const db = require("./db/connection");
const routes = require("./routers");

const PORT = process.env.port || 3003;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

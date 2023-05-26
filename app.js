// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");
// ℹ️ Connects to the database
require("./db");

const express = require("express");
const app = express();

const { isAuthenticated } = require("./middleware/jwt.middleware");

require("./config")(app);

// Routes // Getting the Routes on the front-end with axios using the API_URL with the api routes. Either /api or /auth
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/", authRoutes);

const cardsRoutes = require("./routes/card.routes");
app.use("/", isAuthenticated, cardsRoutes)

const profileRoutes = require("./routes/profile.routes");
app.use("/", isAuthenticated, profileRoutes)

const transitionRoutes = require("./routes/transition.routes");
app.use("/",  transitionRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);


module.exports = app;
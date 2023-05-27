const app = require("./app");
// node server.js testing
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 
https://calm-gray-sawfish-tie.cyclic.app;

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

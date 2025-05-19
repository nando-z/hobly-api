const { app, PORT } = require("./index");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

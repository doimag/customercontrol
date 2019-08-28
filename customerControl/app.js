import express from "express";
import cors from "cors";

let app = express();
const GLOBAL_PORT = 1300;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(function(err, req, res, next) {
  log.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(GLOBAL_PORT, () =>
  console.log(`The server started in the port: ${GLOBAL_PORT}`)
);

export default app;

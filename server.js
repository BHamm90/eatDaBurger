const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require('express-handlebars');
const routes = require('./controllers/catsController.js');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);

/* eslint-disable global-require */
const express = require('express');
const morgan = require('morgan');

const app = express();

const DEV = process.env.NODE_ENV === 'development';


app.use(express.static('static'));

if (DEV) {
  app.use(morgan(':date[format] > :method :url :status :res[content-length] - :response-time ms'));
} else {
  app.use(morgan('common', {
    skip(req, res) {
      return res.statusCode < 400;
    }
  }));
}
let setup;
if (DEV) {
  setup = require('./development');
} else {
  setup = require('./production');
}

setup(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`${DEV ? 'Compiling... Will serve' : 'Listening'} on port ${port}`);
});

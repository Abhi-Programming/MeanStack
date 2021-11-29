let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');
  const createError = require('http-errors');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
useNewUrlParser: true, 
useUnifiedTopology: true 
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// [ Global Setup ]
require('./config/globals');

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));

// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// ------------------------ [ Response Handler ] ------------------------
app.use((req, res, next) => {
  const ResponseHandler = require('./config/responseHandler');
  res.handler = new ResponseHandler(req, res);
  next();
});

// ------------------------ [ Routes ] ------------------------
const appRoutes = require('./routes');
appRoutes(app);

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
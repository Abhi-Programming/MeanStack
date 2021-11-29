const { serverLog, errorLog } = require('../logger');

global.STATUS_CODES = require('./constants').STATUS_CODES;

global.STATUS_MESSAGES = require('./constants').STATUS_MESSAGES;

global.serverLog = serverLog;

global.errorLog = errorLog;
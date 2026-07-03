const format = require('date-fns/format');
const { v4: uuis } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuis()}\t${message}\n`;
    console.log(logItem);
    try {
        fsPromises.appendFile(path.join(__dirname, logFileName), logItem);
    }
    catch (err) {
        console.error(`Error creating logs directory: ${err}`);
    }
};

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
};

module.exports = { logger, logEvents };
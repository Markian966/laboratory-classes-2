const express = require('express');
const { getProcessLog } = require('../utils/logger');

const router = express.Router();

router.get('/', (req, res) => {
  getProcessLog("logout has been initiated and the application will be closed.");
  process.exit();
});

module.exports = router;
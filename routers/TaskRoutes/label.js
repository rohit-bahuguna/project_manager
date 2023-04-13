const express = require('express');
taskLabelRouter = express.Router();
const {
	isLoggedIn,
	
} = require('../../middlewares/auth');
const { createLabel } = require('../../controllers/Task/labelController');

taskLabelRouter.route('/create').post(isLoggedIn , createLabel)


module.exports = taskLabelRouter
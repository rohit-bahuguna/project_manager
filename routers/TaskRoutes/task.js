const express = require('express');
taskRouter = express.Router();
const {
	isLoggedIn,
	customRole,
	ownerOnlyTask
} = require('../../middlewares/auth');
const {
	createTask,
	getAllTaskOfAProject,
	updateAnTask,
	deleteAnTask,
	getAllStatusTypeOfAProjectTask
} = require('../../controllers/Task/taskController');

const {
	assignTaskToUser,
	getAllAssignedTaskOfAUser
} = require('../../controllers/AssignTaskController');

assignTaskToUser;

taskRouter.route('/create').post(isLoggedIn, createTask);

taskRouter.route('/getalltask/:id').get(isLoggedIn, getAllTaskOfAProject);

taskRouter
	.route('/updatetask/:taskId')
	.put(isLoggedIn, ownerOnlyTask, updateAnTask);

taskRouter
	.route('/deletetask/:taskId')
	.delete(isLoggedIn, ownerOnlyTask, deleteAnTask);




//taskRouter.route('/status/:projectId').get(getAllStatusTypeOfAProjectTask);

module.exports = taskRouter;

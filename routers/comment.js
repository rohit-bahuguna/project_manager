const express = require('express');
commentRouter = express.Router();
const { isLoggedIn } = require('../middlewares/auth');
const { createComment, getAllCommentsOfAtask, editComment, deleteComment } = require('../controllers/commentController');

commentRouter.route('/:taskId').get(isLoggedIn , getAllCommentsOfAtask)
commentRouter.route('/create').post(isLoggedIn , createComment)
commentRouter.route('/edit/:commentId').put(isLoggedIn , editComment)
commentRouter.route('/delete/:commentId').delete(isLoggedIn , deleteComment)


module.exports = commentRouter
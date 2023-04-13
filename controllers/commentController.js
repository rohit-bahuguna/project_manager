const commentModel = require('../models/CommentsModel')

exports.createComment = async (req, res) => {
	try {
		const { _id } = req.user;
		const { comment , taskId } = req.body;

		const newComment = await commentModel.create({
			comment,
			commentedBy: _id,
			date: new Date(),
			commented_on: taskId
		});

		res.status(200).json({
			success: true,
			message: 'commented successfully',
			comment: newComment
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			success: false,
			message: error.message
		});
	}
};

exports.getAllCommentsOfAtask = async (req, res) => {
	try {
		const { taskId } = req.params;
		const comments = await commentModel.find({commented_on : taskId})

		res.status(200).json({
			success: true,
			comments
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error.message
		});
	}
};

exports.deleteComment = async (req, res) => {
	try {
		const { commentId } = req.params;

		const { _id } = req.user;
		const deletedComment = await commentModel.findOneAndRemove({
			_id: commentId,
			commentedBy: _id
		});

		

		if (deletedComment === null) {
			throw new Error('you are not allowed to delete this message');
		}
		res.status(200).json({
			success: true,
			message: 'comment deleted successfully',
			deletedComment
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error.message
		});
	}
};

exports.editComment = async (req, res) => {
	try {
		const { _id } = req.user;
		const { commentId } = req.params;
		const { comment } = req.body;

		const updatedComment = await commentModel.findOneAndUpdate(
			{ _id: commentId, commentedBy: _id },
			{ comment, edited: true },
			{
				new: true
			}
		);

		if (updatedComment === null) {
			throw new Error('you are not allowed to edit this message');
		}

		res.status(200).json({
			success: true,
			message: 'comment updated successfully',
			updatedComment
		});
	} catch (error) {
		res.status(400).json({
			success: false,
			message: error.message
		});
	}
};

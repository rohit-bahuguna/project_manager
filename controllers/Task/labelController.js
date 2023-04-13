const taskModel = require("../../models/taskModel");

exports.createLabel = async (req, res) => {
  try {
    const { taskId, title, color } = req.body;

    const task = await taskModel.findOneAndUpdate(
      {
        _id: taskId,
      },
      { $push: { labels: { title, color } } },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "item updated successfully",
      task,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

exports.editLabel = async (req, res) => {
    try {
      const { labelId, title, color } = req.body;
  
      const task = await taskModel.findOneAndUpdate(
        {
          _id: labelId,
        },
        { $push: { labels: { title, color } } },
        { new: true }
      );
  
      res.status(200).json({
        success: true,
        message: "item updated successfully",
        task,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: false, message: error.message });
    }
  };

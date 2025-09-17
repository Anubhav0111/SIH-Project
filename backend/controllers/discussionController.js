const Discussion = require('../models/Discussion');

exports.getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find({});
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDiscussion = async (req, res) => {
  try {
    const discussion = new Discussion(req.body);
    await discussion.save();
    res.status(201).json(discussion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Resource = require('../models/Resource');

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find({});
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const SchemaVersion = require("../models/schema.js");
exports.getPairs = async (req, res) => {
    try {
      // Query the database to find all pairs
      const pairs = await SchemaVersion.find({}, 'pairs');
  
      // Checking if any pairs were found
      if (!pairs) {
        return res.status(404).json({
          message: 'No pairs found',
          success: false
        });
      }
  
      // Responding with the pairs
      res.status(200).json({
        data: pairs,
        success: true
      });
    } catch (error) {
      
      res.status(500).json({
        message: error.message,
        success: false
      });
    }
  };
  
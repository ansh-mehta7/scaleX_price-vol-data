const SchemaVersion = require("../models/schema.js");

exports.createSchema = async (req, res) => {
  try {
    const data = req.body;
    console.log(req.body)
    const newSchemaVersion = new SchemaVersion(data); 
    const savedSchemaVersion = await newSchemaVersion.save();
    res.status(201).json({
      data: savedSchemaVersion,
      success: true
    }); 
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false
    }); 
  }
};

// The createSchema controller is designed to handle POST requests for creating a new schema document in the database. It expects JSON data containing the schema version and an array of pairs. Upon receiving a request, it validates the data, creates a new schema document instance, and saves it to the database. Successful creation results in a 201 status response with the newly created schema ID, while errors trigger a 500 status response with an appropriate error message.
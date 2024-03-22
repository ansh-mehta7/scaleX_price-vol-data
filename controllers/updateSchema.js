const SchemaVersion = require('../models/schema.js');

exports.updateSchema = async (req, res) => {
  const { id } = req.params; 
  
  try {
    
    const updatedSchemaVersion = await SchemaVersion.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedSchemaVersion) {
      return res.status(404).json({ success: false, message: 'SchemaVersion not found' });
    }

    res.status(200).json({ success: true, data: updatedSchemaVersion });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

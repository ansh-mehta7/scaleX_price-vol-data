const SchemaVersion = require('../models/schema');

exports.getPriceAndVolume = async (req, res) => {
  try {
    const { id } = req.params;
    
    const schema = await SchemaVersion.findById(id);

    if (!schema) {
      return res.status(404).json({
        message: 'SchemaVersion not found',
        success: false
      });
    }

    
    const pairs = schema.pairs.map(({ priceUsd, volume }) => ({ priceUsd, volume }));
// map used to iterate on all pair in schema and then returning only the destructured object 
    res.status(200).json({
      pairs,
      success: true
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching price and volume',
      error: error.message,
      success: false
    });
  }
};

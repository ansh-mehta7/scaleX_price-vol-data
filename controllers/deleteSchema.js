const mongoose =require("mongoose")
const SchemaVersion = require("../models/schema.js");

exports.deleteSchema=async (req,res)=>{
    try{
        const schemaID=req.params.id
        await SchemaVersion.findByIdAndDelete(schemaID)
        res.status(200).json({
            message: 'SchemaVersion deleted successfully',
            success: true
        })
    }catch(error){
        res.status(500).json({ 
            message: 'Error deleting SchemaVersion',
            error: error.message,
            success: false
    });
    }
}
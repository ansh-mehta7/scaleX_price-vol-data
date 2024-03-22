const mongoose =require("mongoose")
const express =require("express")
const router=express.Router()

const {createSchema}=require("../controllers/createSchema")
const {getPairs}=require("../controllers/getpairs")
const {updateSchema}=require("../controllers/updateSchema")
const {deleteSchema}= require("../controllers/deleteSchema")
const {getPriceAndVolume}=require("../controllers/getpricevol")

router.post("/create/schemas",createSchema);
router.get("/get/pairs",getPairs)
router.put("/update/schemas/:id",updateSchema);
router.delete("/delete/schemas/:id",deleteSchema);
router.get("/get/price-volume/schemas/:id",getPriceAndVolume)

module.exports=router
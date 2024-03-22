const mongoose =require('mongoose')
const dbConnect= async (req,res)=>{
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', );
    console.log(error)
    process.exit(1);
});
}
module.exports=dbConnect
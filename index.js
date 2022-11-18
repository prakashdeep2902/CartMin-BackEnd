const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = process.env.PORT || 9000;
app.use(express.json())
var cors = require('cors')

app.use(cors())
const mongoURI = "mongodb+srv://prakash2902:%409Deep2000@cluster0.avu6h7a.mongodb.net/mincart?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log("no connection ", err)
})

app.get("/",(req,res)=>{

    res.send(" hello  from server side")
})







// Available Routes
app.use('/api', require('./routes/products'))


app.listen(port, () => {
    console.log(`cart us on  backend listening at ${port}`)
})
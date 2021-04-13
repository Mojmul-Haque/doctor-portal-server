const route = require("express").Router()


route.get("/get",(req,res)=>{
    res.send('hell get')
})




module.exports= route
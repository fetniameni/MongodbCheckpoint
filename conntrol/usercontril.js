const user = require("../models/user")
exports.getusers=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({msg:"done",getuser})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.adduser=async(req,res)=>{
    try {
        const newuser=new user(req.body)
        await newuser.save()
        res.status(200).send({msg:"done",newuser})
    } catch (error) {
        res.status(500).send(error)
    }
}
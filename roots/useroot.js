const express = require("express")
const { model } = require("mongoose")
const { adduser, getusers } = require("../conntrol/usercontril")
const userroot=express.Router()
userroot.post("/add",adduser)
userroot.get("/get",getusers)
module.exports=userroot

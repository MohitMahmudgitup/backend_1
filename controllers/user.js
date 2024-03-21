const User = require("../models/user")
async function hendleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}
async function hendlePostAllUsers(req,res){
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.email) {
      res.status(400).json();
    }
    const result = await User.create({
        fristname: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitel: body.jobTitel,
        gender: body.gender
      });
      return res.status(201).json({ msg: "SUCCESS",id: result._id });
}

async function hendlegetUserByID(req,res){
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ Error: "this is same error" });
    return res.json(user);
}
async function hendlepatchUserByID(req,res){
    await User.findIdAndUpdate(req.params.id, { lastName });
    return res.json({ status: "pending" });
}
async function hendledeleteUserByID(req,res){
    await User.findOneAndDelete(req.params.id);
    return res.json({ status: "pending" });
}





module.exports = { 
    hendleGetAllUsers,
    hendlePostAllUsers,
    hendlegetUserByID,
    hendlepatchUserByID,
    hendledeleteUserByID
}
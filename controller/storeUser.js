const User = require("../models/user");


module.exports = (req,res)=>{
    User.create(req.body.blog, (err, user)=>{
        res.redirect("/");
    })
}
const router = require("express").Router();
const User = require("../models/UserSchema");

router.post("/add", (req, res)=>{
  User.create(req.body, (err, user)=>{
    err ? res.status(499).send(err) : res.end("Alles Gut!")
  })
})

router.get("/all", (req, res)=>{
  User.find({}, (err, users)=>{
    err ? res.status(499).send(err) : res.send(users)
  })
})

module.exports = router;

const router = require("express").Router();
const User = require("../models/UserSchema");

router.post("/add", (req, res)=>{
  User.create(req.body, (err, user)=>{
    err ? res.status(499).send(err) : res.end("Alles Gut!")
  })
})

module.exports = router;

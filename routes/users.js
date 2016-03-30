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

router.delete("/:id", (req, res)=>{
  User.findByIdAndRemove(req.params.id, err=>{
    err ? res.status(499).send(err) : res.send("User Removed")
  })
})

router.put("/", (req, res)=>{
  User.findByIdAndUpdate(req.body._id, req.body, err=>{
    err ? res.status(499).send(err) : res.send("User updated!")
  })
})

module.exports = router;

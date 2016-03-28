"use strict";
const router = require("express").Router();
const Item = require("../models/ItemSchema");
const Location = require("../models/LocationSchema");

router.post("/add", (req, res)=>{
  req.body.keywords = req.body.keywords.split(/[^'\w]+/g);
  Item.create(req.body, (err, item)=> {
    if (err) return res.status(499).send(err);
    const locations = item.location.split("+");
    for (let location of locations){
      Location.findOne({name: location}, (err, house)=>{
        if (err) res.status(499).send(err);
        else if (!house) {
          Location.create({name: location, items:[item._id]}, (err)=>{
            err ? res.status(499).send(err) : res.end("Item created!")
          })
        }
        else {
          house.items.push(item._id);
          house.save(err=>
            err ? res.status(499).send(err) : res.end("Item created!")
          )
        }
      })
    }
  })
})



module.exports = router;

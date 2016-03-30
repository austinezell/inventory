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
            err ? res.status(499).send(err) : res.end("Item created!");
          })
        }
        else {
          house.items.push(item._id);
          house.save(err=>{
            err ? res.status(499).send(err) : res.end("Item created!");
          })
        }
      })
    }
  })
})

router.get('/all', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(499).send(err);

    let CH1 = items.filter(item => /CH1/.test(item.location));
    let CH2 = items.filter(item => /CH2/.test(item.location));

    res.send({CH1, CH2})
  })
})

router.get('/altogether', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(499).send(err);
    res.send(items)
  })
})

router.delete("/remove/:id", (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err)=>{
    err ? res.status(499).send(err) : res.end("Alles Gut!")
  })
})

module.exports = router;

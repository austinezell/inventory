"use strict";
const router = require("express").Router();
const Item = require("../models/ItemSchema");
const cleanArray = require('../config/cleanArray')

router.post("/add", (req, res)=>{
  req.body.keywords = req.body.keywords.trim().split(/[^'\w]+/g);
  req.body.keywords = cleanArray(req.body.keywords);
  Item.create(req.body, (err, item)=> {
    if (err) return res.status(499).send(err);

    res.send(item);
  })
})

router.put("/", (req, res)=>{
  let item = req.body;
  item.lastUpdated = new Date();
  if(!(/s$/.test(item.unitType))){
    item.unitType = `${item.unitType}s`
  }
  item.keywords = item.keywords.join(" ").trim().split(/[^'\w]+/g);
  item.keywords = cleanArray(item.keywords);
  Item.findOneAndUpdate({_id:item._id}, {$set:item}, (err, item)=>{
    if (err) return res.status(499).send(err);
    res.end("Alles gut!");
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

router.delete("/:id", (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err)=>{
    err ? res.status(499).send(err) : res.end("Alles Gut!")
  })
})

module.exports = router;

"use strict";
const router = require("express").Router();
const Item = require("../models/ItemSchema");
const ArrayFunctions = require('../config/cleanArray')

router.post("/add", (req, res)=>{
  if(req.body.keywords){
    req.body.keywords = req.body.keywords.trim().split(/[^'\w]+/g);
    req.body.keywords = ArrayFunctions.cleanArray(req.body.keywords);
  }
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
  Item.findByIdAndUpdate(item._id, item, (err, item)=>{
    if (err) return res.status(499).send(err);
    res.end("Alles gut!");
  })
})

router.get('/all', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(499).send(err);

    items.sort(ArrayFunctions.sortObjects)
    let CH1 = items.filter(item => /CH1/.test(item.location));
    let CH2 = items.filter(item => /CH2/.test(item.location));

    res.send({CH1, CH2})
  })
})

router.get('/altogether', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(499).send(err);
    items.sort(ArrayFunctions.sortObjects)
    res.send(items)
  })
})

router.delete("/:id", (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err)=>{
    err ? res.status(499).send(err) : res.end("Alles Gut!")
  })
})

module.exports = router;

"use strict";
const router = require("express").Router();
const Item = require("../models/ItemSchema");
const AF = require('../config/ArrayFunctions')

router.post("/add", (req, res)=>{
  if(req.body.keywords){
    req.body.keywords = req.body.keywords.trim().split(/[^'\w]+/g);
    req.body.keywords = AF.cleanArray(req.body.keywords);
  }
  Item.create(req.body, (err, item)=> {
    if (err) return res.status(477).send(err);

    res.send(item);
  })
})

router.put("/update", (req, res)=>{
  let item = req.body;
  if(!(/s$/.test(item.unitType))){
    item.unitType = `${item.unitType}s`
  }
  item.keywords = item.keywords.join(" ").trim().split(/[^'\w]+/g);
  item.keywords = AF.cleanArray(item.keywords);
  Item.findById(item._id, (err, oldItem)=>{
    if (err) return res.status(477).send(err);
    oldItem.update({$set: item}, (err)=>{
      if (err) return res.status(477).send(err);
      res.end("Alles gut!");
    })
  })
})

router.get('/all', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(477).send(err);

    items.sort(AF.sortObjects)
    let CH1 = items.filter(item => /CH1/.test(item.location));
    let CH2 = items.filter(item => /CH2/.test(item.location));

    res.send({CH1, CH2})
  })
})

router.get('/altogether', (req, res)=>{
  Item.find({}, (err, items)=>{
    if (err) return res.status(477).send(err);
    items.sort(AF.sortObjects)
    res.send(items)
  })
})

router.delete("/:id", (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err)=>{
    err ? res.status(477).send(err) : res.end("Alles Gut!")
  })
})

module.exports = router;
